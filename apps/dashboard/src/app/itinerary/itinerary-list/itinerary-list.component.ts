import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@itinerary/api-interfaces'

@Component({
  selector: 'itinerary-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.scss']
})
export class ItineraryListComponent {
  @Input() itineraries: Event[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
