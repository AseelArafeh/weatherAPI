import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weather: WeatherService) { }

  lat;
  lng;
  weatherForAroundCities;
  name = '';

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.weatherForAroundCities = this.weather.getAroundDetails(this.lat, this.lng).subscribe(data => {
            this.weatherForAroundCities = data;
        });
      });
    } else {
      this.lat = 40.73;
      this.lng = -73.93;
    }
  }
}


