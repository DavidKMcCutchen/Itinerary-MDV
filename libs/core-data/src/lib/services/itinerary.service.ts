import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '@itinerary/api-interfaces';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  model = 'itineraries'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  getUrlById(id){
    return `${this.getUrl()}/${id}`
  }

  create(itineraries: Event){
    return this.httpClient.post(this.getUrl(), itineraries)
  }

  update(itineraries: Event){
    return this.httpClient.patch(this.getUrlById(itineraries.id), itineraries)
  }

  delete(itineraryId){
    return this.httpClient.delete(this.getUrlById(itineraryId))
  }
}
