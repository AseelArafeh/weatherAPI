import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  appID = '27451e4cd5a755ebd71d3046d1d036fe';

  getTodayForcast (lat: number, lng: number) {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lng.toString());
    params = params.set('APPID', this.appID);
    return this.http.get(this.ROOT_URL, { params });
  }

  getNextFiveDaysForcast (lat: number, lng: number) {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lng.toString());
    params = params.set('APPID', this.appID);
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?', { params });

  }

  getAroundDetails (lat: number, lng: number) {
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lng.toString());
    params = params.set('cnt', '20');
    params = params.set('APPID', this.appID);
    return this.http.get('https://api.openweathermap.org/data/2.5/find?', { params });
  }

}
