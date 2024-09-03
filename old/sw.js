
const CACHE_NAME = 'cache-1';

self.addEventListener('install', e => {
    
   let cacheProm = caches.open(CACHE_NAME)
          .then( cache => {

                return cache.addAll([
                    './',
                    './index.html',
                    './css/style.css',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                    './img/main.jpg'
                ]);
        
        });

    e.waitUntil(cacheProm)
    
});


self.addEventListener('fetch', e => {

    //1. Cache only
    //e.respondWith( caches.match(e.request) );

    //2. Cache with newtwork Fallback
   const respuesta = caches.match( e.request ).then( res => {
        if(res) return res;
        console.log("No existe", e.request.url); 

        return fetch(e.request)
                .then( newResp => {
                        
                         caches.open(CACHE_NAME)
                                .then( cache => {
                                    cache.put(e.request, newResp)
                                });
                                
                         return newResp;
                        
                        }
                    );
   
    });

    e.respondWith(respuesta);

   

})