import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from './core/services/route.service';

const routes: Routes = [
  Route.withShell([
    {
      path: '',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'movies-list',
      loadChildren: () =>
        import('./pages/movies-list/movies-list.module').then((m) => m.MoviesListModule),
    },
    {
      path: ':id',
      loadChildren: () =>
        import('./pages/movie-details/movie-details.module').then((m) => m.MovieDetailsModule),
    },
  ])
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
