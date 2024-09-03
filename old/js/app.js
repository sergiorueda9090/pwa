

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw.js');
}


/*if( window.caches ){

    caches.open('cache-v1.1').then(
        cache => {
                //cache.add('./index.html');
                cache.addAll(['./index.html', './css/style.css', './img/main.jpg'])
                    .then( () => {
                        //cache.delete('./css/style.css')
                    });
                    
                cache.match('./index.html').then(res => {
                    res.text().then( console.log )
                })
        
            });
    
    caches.keys().then( key => {
        console.log(key)
    })

}*/