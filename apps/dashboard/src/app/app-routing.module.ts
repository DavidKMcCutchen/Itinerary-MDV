import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ItineraryService } from '@itinerary/core-data';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { UiLoginComponent } from '@itinerary/ui-login'


const routes: Route[] = [
  {path: '', component: UiLoginComponent},
  {path: 'itinerary', component: ItineraryComponent},
  {path: 'login', component: UiLoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
 export class RoutingModule {}