import { Injectable } from '@angular/core';

// Models
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('1', 'Manhatan Mansion', 'In the heart of New York City', 'assets/img/new-york.jpg', 149.99),
    new Place('2', 'Amour to Toujour', 'A romantic place in Paris', 'assets/img/paris.jpg', 99.99),
    new Place('3', 'The Fogguie Place', 'Not year average city trip!', 'assets/img/home-office.jpg', 149.99),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
