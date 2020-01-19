import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-item',
  templateUrl: './today-item.component.html',
  styleUrls: ['./today-item.component.css']
})

export class WeatherItemComponent implements OnInit {

  constructor() { }

  @Input() todayForecast;

  ngOnInit() {
  }

}
