import { Component } from '@angular/core';

@Component({
  selector: 'itinerary-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Itinerary';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'itinerary', icon: 'view_list', title: 'Itinerary'}
  ]
}
