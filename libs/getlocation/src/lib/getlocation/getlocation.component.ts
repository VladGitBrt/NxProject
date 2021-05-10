import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherData {
  cityName: string;
  temperature: string;
  pressure: string;
  weatherDescription: string;
}

@Component({
  selector: 'projects-getlocation',
  templateUrl: './getlocation.component.html',
  styleUrls: ['./getlocation.component.css'],
})
export class GetlocationComponent implements OnInit {
  locationKey = 'df1a0de255f943c0a2dfe3e3b72b54a4';
  weatherKey = 'c187a1ff8b9459f9829676efc9261ab1';
  geoResults: string;
  btnText = 'SEND';
  result;
  value;
  weatherArr = [];
  constructor(private getLocation: HttpClient, private http: HttpClient) {}
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((result) => {
      console.log(result);
      const lat = result.coords.latitude;
      const lon = result.coords.longitude;
      this.getCity(lat, lon);
    }, this.failCallback);
  }
  failCallback(err) {
    console.error(err);
  }
  findCountry(name: string): void {
    this.sendRequest(name).subscribe((result) => {
      (this.result = result),
        (this.value = {
          cityName: this.result.name,
          temperature: Math.round(this.result.main.temp - 270),
          pressure: this.result.main.pressure,
          weatherDescription: this.result.weather[0].description,
        }),
        this.weatherArr.push(this.value);
    });
    console.log(this.weatherArr);
  }
  sendRequest(name: string): Observable<any> {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        name +
        '&APPID=' +
        this.weatherKey
    );
  }
  getGeo(lat: number, lon: number): Observable<any> {
    return this.getLocation.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${this.locationKey}&language=ru&pretty=1`
    );
  }
  getCity(lat: number, lon: number) {
    console.log(lat, lon);
    this.getGeo(lat, lon).subscribe((geo) => {
      console.log(geo);
      this.geoResults = geo.results[0].components.city;
      console.log(this.geoResults);
    });
  }
}
