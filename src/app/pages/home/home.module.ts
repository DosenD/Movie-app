import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


// COMPONENTS
import { HomeComponent } from './home.component';

// SERVICES

const components = [HomeComponent];
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [...components],
})
export class HomeModule {}
