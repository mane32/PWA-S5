
// Ciclo de vida del SW

self.addEventListener('install', event => {
     //Descargar assets
     //Creamos un cache

    console,log('SW: Instalando SW' );

    const instalacion = new Promise((resolve, reject) => {


    setTimeout(() => {
        console.log('SW: Instalaciones terminadas');
        self.skipWaiting();
        resolve();
    }, 1);
});
    event.waitUntil(instalacion);

});

//FETCH
self.addEventListener('fetch', event => {
    //Aplicar estrategias del cache
     console.log('SW:', event.request.url);
         if (event.request.url.includes('https://reqres.in/')) {
             const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);
              event.respondWith(resp); }
});