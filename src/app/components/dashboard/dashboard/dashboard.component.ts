import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

interface weatherCast {
  location: {
    name: string,
    region: string,
    localtime: Date,
    country: string
  },
  current: {
    condition: {
      icon: string
    },
    humidity: number,
    last_updated: Date,
    temp_c: number,
    temp_f: number,
    wind_dir: string,
    wind_kph: number,

  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weatherData: weatherCast;
  isCelsius: boolean = true;
  cityName: string = 'Mumbai'

  constructor(private route: Router, private http: HttpRequestService) { }

  ngOnInit(): void {
    this.getWeatherDetails()

  }

  // get initial data
  getWeatherDetails() {
    this.http.request('get', '', null, this.cityName).subscribe(
      (res) => {
        console.log("city name us", this.cityName);

        this.weatherData = res
      },
      (error) => {

      }
    )
  }

  // chehck wheater is it celcius or not
  isCelsiusCheck(val: boolean) {

    if (val) {
      this.isCelsius = true
    } else {
      this.isCelsius = false
    }
  }

  // store the search data 
  searInput(val: string) {
    this.cityName = val
  }

}
