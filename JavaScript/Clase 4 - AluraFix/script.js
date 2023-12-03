function agregarPelicula() {
    var peliculaFavorita = document.getElementById("pelicula").value;
    var elementoListaPelicula = document.getElementById("listaPeliculas");
  
    elementoListaPelicula.innerHTML =
      elementoListaPelicula.innerHTML + "<img src = " + peliculaFavorita + ">";
  
    document.getElementById("pelicula").value = "";
  
    //document.write("<img src = " + listaPeliculas[i] + ">");
  }
  