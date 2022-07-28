import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // aca intento usar una url de mi base de datos donde tengo algunas peliculas ingresadas pero no funciona
  // url = "http://localhost/phpmyadmin/index.php?route=/sql&db=proyectofinal&table=consulta&pos=0"

  // el endpoint tiene /matrix para que me muestre algo, luego queiro configurarlo para que se concatene el string que ingrese el usuario
  // en el campo de busqueda
  url = "https://imdb-api.com/en/API/SearchMovie/k_224sjk3l/matrix";
  constructor(
    private http: HttpClient
  ) {
    console.log('servicio movies')
  }
  getMovies(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this.url,{
      headers: header
    });
  }
}
