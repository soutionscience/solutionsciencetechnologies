import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  home: Home[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getHome()
  }

  getHome(){
    this.apiService.getResource('home')
    .subscribe(resp => this.home = resp)
  }

}
