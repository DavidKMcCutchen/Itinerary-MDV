import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@itinerary/api-interfaces';

@Component({
  selector: 'itinerary-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.scss']
})
export class ItineraryDetailsComponent {
  currentItinerary: Event;
  originalTitle: string;

@Output() saved = new EventEmitter()
@Output() cancelled = new EventEmitter()
@Input() set itinerary(value) {
  if(value) this.originalTitle = value.title;
  this.currentItinerary = Object.assign({}, value)
}

save(itinerary){
  this.saved.emit(itinerary);
}

cancel(){
  this.cancelled.emit();
}

}
