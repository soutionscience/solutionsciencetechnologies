import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
