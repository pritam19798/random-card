import { Component, OnInit, Input } from '@angular/core';

import{
  faEnvelope, 
  faMapMarkedAlt,
  faPhone,
  faDatabase,
  faMapMarker
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user:any

  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;
  faMapMarker=faMapMarker;
  constructor() { }

  ngOnInit(): void {
  }

}
