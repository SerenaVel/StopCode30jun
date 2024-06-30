import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';
import { ListaDettaglio } from '../models/dettaglio';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http:HttpClient) {}
   
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    }  
 getDettaglioAlbum() : Observable <ListaDettaglio[]> {
      return this.http.get<ListaDettaglio[]>("https://jsonplaceholder.typicode.com/photos?albumId=7")
     }
   }


