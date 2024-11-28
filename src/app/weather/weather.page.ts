import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  city: string = 'Madrid'; // Ciudad por defecto
  weatherData: any;
  loading: boolean = false;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.loading = true;
    this.error = null;
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudo obtener el clima. Verifica la ciudad.';
        this.loading = false;
      }
    });
  }
}