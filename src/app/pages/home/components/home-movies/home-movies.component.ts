import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss']
})
export class HomeMoviesComponent {
  @Input()
  movieList$: Observable<IMovie[]> | undefined;
  constructor() { }

}
