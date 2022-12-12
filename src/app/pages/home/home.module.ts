import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


// COMPONENTS
import { HomeComponent } from './wrapper/home.component';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';

// SERVICES

const components = [
  HomeComponent,
];
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [...components, HomeMoviesComponent],
})
export class HomeModule {}
