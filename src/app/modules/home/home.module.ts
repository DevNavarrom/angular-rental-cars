import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Modules
import { HomeRoutingModule } from './home-routing.module';

//Components
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
