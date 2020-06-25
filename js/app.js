(function () {
  const botonSiguiente = document.querySelector(".siguiente");
  const botonAnterior = document.querySelector(".anterior");
  const imagen = document.querySelector(".imagen");

  let contador = 0;

  let imagenes = [
    "./images/blue-universe-956981.jpg",
    "./images/blue-and-brown-milky-way-galaxy-2694037.jpg",
    "./images/milky-way-galaxy-during-nighttime-1252890.jpg",
    "./images/scenic-view-of-forest-during-night-time-1252869.jpg",
    "./images/silhouette-of-person-under-blue-and-purple-sky-957040.jpg",
    "./images/sky-space-milky-way-stars-110854.jpg",
  ];

  botonSiguiente.addEventListener("click", adelantarImagen);
  botonAnterior.addEventListener("click", atrasarImagen);

  function adelantarImagen() {
    contador++;
    if (contador == 5) {
      contador = 0;
    } //PARA CEAR UN SLIDER INFINITO
    imagen.src = imagenes[contador];
  }
  function atrasarImagen() {
    contador--;
    if (contador == -1) {
      contador = 5;
    }
    imagen.src = imagenes[contador];
  }
})();
