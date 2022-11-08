import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';


// COMPONENTS
import { MovieDetailsComponent } from './movie-details.component';

// SERVICES

const components = [MovieDetailsComponent];
@NgModule({
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
  ],
  declarations: [...components],
})
export class MovieDetailsModule {}