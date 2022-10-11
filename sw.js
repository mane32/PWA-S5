
// Ciclo de vida del SW

self.addEventListener('install', event => {
     //Descargar assets
     //Creamos un cache


    console,log('SW: Instalando SW' );

});

//Cuando el SW toma el control de la app
self.addEventListener('activate', event => {
    console.log('SW: activo y listo para controlar app');
});