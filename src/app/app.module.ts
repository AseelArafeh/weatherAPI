import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherItemComponent,
    WeatherViewComponent
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
