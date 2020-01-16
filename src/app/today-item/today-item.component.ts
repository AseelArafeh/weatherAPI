import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-item',
  templateUrl: './today-item.component.html',
  styleUrls: ['./today-item.component.css']
})

export class WeatherItemComponent implements OnInit {

  constructor() { }

  // lat: number;
  // lng: number;
  // forecast: Observable<any>;
  @Input() todayForecast;


  ngOnInit() {

  }


  /*
  getForecast() {
    //this.forecast = this.weather.getWeathers(this.lat, this.lng)
      //.do(data => console.log(data))
    console.log(this.forecast)
  }*/


}
