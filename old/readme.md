self.addEventListener('fetch', event => {

    if( event.request.url.includes('main.jpg') ){

        event.respondWith( fetch('img/main-patas-arriba.jpg') )

    }

})


=========== start ===============
self.addEventListener('fetch', event => {
    const resp = fetch( event.request ).then( resp => resp.ok ? resp : fetch('img/main-patas-arriba.jpg'));
    event.respondWith( resp );
})
=========== end ===============