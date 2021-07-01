import { Component, OnInit } from '@angular/core';

// Services
import { PlacesService } from '../places.service';

// Models
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadPlaces: Place[];

  constructor( private placesServ: PlacesService ) { }

  ngOnInit() {
    this.loadPlaces = this.placesServ.places;
    console.log(this.loadPlaces);
  }

}
