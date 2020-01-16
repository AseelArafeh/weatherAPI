import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'home/:latt/:long', component:HomeComponent },
  { path:'search', component:SearchComponent },
  { path:'weatherview', component:WeatherViewComponent },
  { path:'weatherview/:idx/:lat/:lng', component:WeatherViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
