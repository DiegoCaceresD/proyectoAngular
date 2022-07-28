import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../servicios/movies.service";
import {Pelicula} from "../../dominio/pelicula";

declare function guardarProductosLS(productos):any;
declare function showAlert();
declare function actualizarBotonFavorito();
declare function cargarProductosFavorito();
declare function buscarProducto(id)
declare function AgregarFavoritos(id)

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //aca intento usar un objeto de la clase pelicula para acceder al ID y pasarselo a la funcion AgregarFavoritos() pero no se
  // como asignarle los valores a la clase. no se si funciona solo estaba probando
  pelicula:Pelicula = new Pelicula();

  // CREACION DE ARRAY DONDE ALMACENO LAS PELICULAS
  public movies: Array<any> =[];
  id:string;
  movie: string;

// LLAMADO A LA API
  constructor(private movieService: MoviesService) {
     this.movieService.getMovies().subscribe((resp: any)=>{
       this.movies = resp.results;
       this.movies.forEach((item)=>{
       const titulo = item.title;
         const imagen = item.image;
         this.id=item.id
         guardarProductosLS(this.movies)
       })
       console.log(resp.results)
     })
  }

  ngOnInit(): void {
  }

// USO DE ARCHIVOS JS
  llamarJS(productos) {
    showAlert()
    guardarProductosLS(productos)
    actualizarBotonFavorito()
    cargarProductosFavorito()
    //AgregarFavoritos(movie.id) // no funciona
    buscarProducto(this.id) // aca estoy probando si puedo acceder al id de cada pelicula pero solo accedo al ultimo.

  }
}
