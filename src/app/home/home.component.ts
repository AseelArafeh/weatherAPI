import { Component, OnInit, Host } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  public weatherForToday;
  public weatherForComingDays;
  public weatherForAroundCities;
  lat;
  lng;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat);  
        console.log(this.lng);
        this.weatherForToday = this.weather
          .getTodayForcast(this.lat, this.lng)
          .subscribe(data => {
            this.weatherForToday = data;
            console.log(this.weatherForToday);
          });
        this.weatherForComingDays = this.weather
          .getNextFiveDaysForcast(this.lat, this.lng)
          .subscribe(data => {
            this.weatherForComingDays = data;
            console.log(this.weatherForComingDays);
          });
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
