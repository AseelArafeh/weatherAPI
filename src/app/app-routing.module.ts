import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:latt/:long', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'weatherview', component: WeatherViewComponent },
  { path: 'weatherview/:idx/:lat/:lng', component: WeatherViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
