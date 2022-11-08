import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.moviesService.getMovies().subscribe(res=> {
    //   console.log(res)
    // })
  }

}
