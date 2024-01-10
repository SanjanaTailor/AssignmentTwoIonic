// src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = '688c10c23b191a4ba04651893f5ec3a8';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HTTP) {}

  getWeatherByCity(city: string) {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url, {}, {});
  }
}
