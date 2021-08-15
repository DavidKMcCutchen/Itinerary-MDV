import { Component, OnInit } from '@angular/core';
import { emptyEvent, Event } from '@itinerary/api-interfaces';
import { ItineraryService } from '@itinerary/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'itinerary-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  itineraries$: Observable<any>
  selectedItinerary: Event;

  constructor(private itineraryService: ItineraryService) { }

  ngOnInit() {
    this.getItinerary()
    this.resetItinerary()
  }

  getItinerary() {
    this.itineraries$ = this.itineraryService.all()
  }

  saveItinerary(itinerary) {
    if(! itinerary.id) {
      this.createItinerary(itinerary);
    } else {
      this.updateItinerary(itinerary);
    }
  }

  selectItinerary(itinerary: Event) {
    this.selectedItinerary = itinerary;
  }

  createItinerary(itinerary: Event) {
    this.itineraryService.create(itinerary).subscribe(() => {
      this.getItinerary();
      this.resetItinerary();
    });
  }

  updateItinerary(itinerary:Event) {
    this.itineraryService.update(itinerary).subscribe(() => {
      this.getItinerary();
      this.resetItinerary();
    });
  }

  deleteItinerary(itinerary: Event) {
    this.itineraryService.delete(itinerary.id).subscribe(() => {
      this.getItinerary();
      this.resetItinerary();
    });
  }

  resetItinerary() {
    this.selectItinerary(emptyEvent);
  }

  cancel(){
    this.resetItinerary();
  }

}
