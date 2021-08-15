import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { ItineraryListComponent } from './itinerary/itinerary-list/itinerary-list.component';
import { ItineraryDetailsComponent } from './itinerary/itinerary-details/itinerary-details.component';
import { MaterialModule } from '@itinerary/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@itinerary/core-data';

@NgModule({
  declarations: [AppComponent, ItineraryComponent, ItineraryListComponent, ItineraryDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
