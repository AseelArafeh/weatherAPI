import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private weather : WeatherService) { }

  lat;
  lng;
  weatherForAroundCities;
  name = '';
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);
        this.weatherForAroundCities = this.weather
          .getAroundDetails(this.lat, this.lng)
          .subscribe(data => {
            this.weatherForAroundCities = data;
            console.log(this.weatherForAroundCities);
          });
      });
    } else {
      /// default coords
      this.lat = 40.73;
      this.lng = -73.93;
      console.log(this.lat);
      console.log(this.lng);
      console.log("error coords");
    }
  }

}


