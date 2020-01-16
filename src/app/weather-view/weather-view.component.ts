import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from "../weather.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-weather-view",
	templateUrl: "./weather-view.component.html",
	styleUrls: ["./weather-view.component.css"]
})
export class WeatherViewComponent implements OnInit {
	constructor(
		private weather: WeatherService,
		private route: ActivatedRoute
	) {}
	lat;
	lng;
	idx;
	currentView;
	weatherForComingDays;
	ngOnInit() {
		this.idx = parseInt(this.route.snapshot.paramMap.get("idx"));
		this.idx *= 8;
		console.log("idx " + this.idx);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
				console.log(this.lat);
				console.log(this.lng);
				/*
        this.currentView = this.weather
          .getTodayForcast(this.lat, this.lng)
          .subscribe(data => {
            this.currentView = data;
            console.log(this.currentView);
          });*/
				this.weatherForComingDays = this.weather
					.getNextFiveDaysForcast(this.lat, this.lng)
					.subscribe(data => {
						this.weatherForComingDays = data;
						console.log(this.weatherForComingDays);
						this.currentView = this.weatherForComingDays.list[this.idx];
						console.log("current from view " + this.currentView.main.temp);
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
