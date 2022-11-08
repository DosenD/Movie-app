import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/interfaces/movie'


// @Injectable({
//   providedIn: 'root',
// })

export class MoviesService {

  constructor(private http: HttpClient) {}

  // getMovies(): Observable<HttpResponse<any>>{
  //   return this.http.get('../../../assets/top250.json', {
  //     observe: 'response'
  //    }
  //   )
  // }
}