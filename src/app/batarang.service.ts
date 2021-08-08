import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BatarangService {

  private apiUri = "http://www.omdbapi.com/?apikey=19997b46";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
	console.log("BatarangService getMovies()");
    return this.httpClient.get<any>(`${this.apiUri}&type=movie&s=Batman`);
  }

  getMovie(imdbID: string): Observable<any> {
	console.log("BatarangService getMovie("+imdbID+")");
    return this.httpClient.get<any>(`${this.apiUri}&i=${imdbID}`);
  }






}
