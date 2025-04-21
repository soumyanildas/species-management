import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  getDetails(): Observable<Location> {
    return this.http.get<Location>('http://ip-api.com/json');
  }
}

export interface Location {
  city: string;
  query: string;
  lat: number;
  lon: number;
}
