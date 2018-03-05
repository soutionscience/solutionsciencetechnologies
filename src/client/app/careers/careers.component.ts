import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
