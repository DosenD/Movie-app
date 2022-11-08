import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListRoutingModule } from './movies-list-routing.module';


// COMPONENTS
import { MoviesListComponent } from './movies-list.component';

// SERVICES

const components = [MoviesListComponent];
@NgModule({
  imports: [
    CommonModule,
    MoviesListRoutingModule,
  ],
  declarations: [...components],
})
export class MoviesListModule {}