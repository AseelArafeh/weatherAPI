import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from './../../services/weather.service';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-weather-view",
	templateUrl: "./weather-view.component.html",
	styleUrls: ["./weather-view.component.css"]
})
export class WeatherViewComponent implements OnInit {

	constructor(private weather: WeatherService, private route: ActivatedRoute) { }

	lat;
	lng;
	idx;
	currentView;
	weatherForComingDays;

	ngOnInit() {
		this.idx = parseInt(this.route.snapshot.paramMap.get("idx"));
		this.idx *= 8;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
				if(this.idx == 0) {
					this.currentView = this.weather.getTodayForcast(this.lat, this.lng).subscribe(data => {
						this.currentView = data;
					});
				} else {
					this.weatherForComingDays = this.weather.getNextFiveDaysForcast(this.lat, this.lng).subscribe(data => {
						this.weatherForComingDays = data;
						this.currentView = this.weatherForComingDays.list[this.idx];
					});
				}
			});
		} else {
			this.lat = 40.73;
			this.lng = -73.93;
		}
	}
}
