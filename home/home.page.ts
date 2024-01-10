// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: string;
  weather: any;
  weatherIcon: string;

  constructor(private geolocation: Geolocation, private weatherService: WeatherService) {}

  getWeather() {
    if (this.city) {
      this.weatherService.getWeatherByCity(this.city).then((response) => {
        this.weather = JSON.parse(response.data);
        this.setWeatherIcon();
      });
    }
  }

  setWeatherIcon() {
  const weatherIconCode = this.weather.weather[0].icon;

    switch (weatherIconCode) {
      case '01d':
        this.weatherIcon = 'sunny';
        break;
      case '01n':
        this.weatherIcon = 'moon';
        break;
      case '02d':
      case '02n':
        this.weatherIcon = 'partly-sunny';
        break;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        this.weatherIcon = 'cloudy';
        break;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        this.weatherIcon = 'rainy';
        break;
      case '11d':
      case '11n':
        this.weatherIcon = 'thunderstorm';
        break;
      case '13d':
      case '13n':
        this.weatherIcon = 'snow';
        break;
      case '50d':
      case '50n':
        this.weatherIcon = 'partly-sunny';
        break;
      default:
        this.weatherIcon = 'cloudy';
        break;
}
