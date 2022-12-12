import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../shared/interfaces/movie.interface'


@Injectable({
  providedIn: 'root',
})

export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>('../../../assets/top250.json')
  }
}