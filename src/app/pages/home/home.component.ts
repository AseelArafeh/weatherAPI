import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, Host } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(private weather: WeatherService) { }

  public weatherForToday;
  public weatherForComingDays;
  public weatherForAroundCities;
  lat;
  lng;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.weatherForToday = this.weather.getTodayForcast(this.lat, this.lng).subscribe(data => {
            this.weatherForToday = data;
        });
        this.weatherForComingDays = this.weather.getNextFiveDaysForcast(this.lat, this.lng).subscribe(data => {
            this.weatherForComingDays = data;
        });
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
