import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import {visibility, flyInOut} from '../animations/app.animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [visibility(), flyInOut()]
})
export class WelcomeComponent implements OnInit {

  home: Home[];
  visible = 'shown';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.apiService.getResource('home')
    .subscribe(resp => this.home = resp);
  }
  // toggleShow() {
  //   console.log(this.visible)
  //   this.visible = this.visible === 'shown' ? 'hidden' : 'shown';

  // }

}
