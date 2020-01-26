import { SearchComponent } from './pages/search/search.component';
import { NextDaysItemComponent } from './components/next-days-item/next-days-item.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherItemComponent } from './components/today-item/today-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeheightDirective } from './changeheight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherItemComponent,
    WeatherViewComponent,
    NextDaysItemComponent,
    SearchComponent,
	SearchPipe,
	LoginComponent,
	ChangeheightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
