import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-map',
  templateUrl: './contacts-map.component.html',
  styleUrl: './contacts-map.component.scss'
})
export class ContactsMapComponent {

  zoom: number = 16;

  center: google.maps.LatLngLiteral = {
    lat: 49.990886,
    lng: 36.233360
  };

}
