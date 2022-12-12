import { Component, OnInit } from '@angular/core';
import { take, Observable, map } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IMovie } from '../../../shared/interfaces/movie.interface'
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList$: Observable<IMovie[]> | undefined;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieList$ = this.moviesService.getMovies()
     .pipe(
        map((data: IMovie[]) => 
          data.slice(0, 5)
        )
     )
  }
}
