import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destination } from './destinations.model';


@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinationServiceUrl = 'http://localhost:8080/destination';
  constructor(private http: HttpClient) { }

  getDestinations() {
    return this.http.get<Destination[]>(this.destinationServiceUrl);
  }
}