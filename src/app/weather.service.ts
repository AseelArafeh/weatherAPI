import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weather } from './weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
// try casting for string :)
  getWeathers(): Observable<weather> {
    // use postMan tool
    return this.http.get<weather>("https://api.openweathermap.org/data/2.5/weather?q=Hebron&APPID=27451e4cd5a755ebd71d3046d1d036fe");
  }
}
