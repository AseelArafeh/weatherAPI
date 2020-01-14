import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public weatherForToday;
  constructor(private weather : WeatherService) { }

  ngOnInit() {
    this.weather.getWeathers().subscribe(data => {
      this.weatherForToday = data;
      console.log(this.weatherForToday);
    });    
  }

}
