import { WeatherItemComponent } from './today-item/today-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { HttpClientModule} from '@angular/common/http';
import { NextDaysItemComponent } from './next-days-item/next-days-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherItemComponent,
    WeatherViewComponent,
    NextDaysItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
