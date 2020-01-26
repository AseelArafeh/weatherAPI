import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
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
