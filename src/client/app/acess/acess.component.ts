import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})

export class AcessComponent implements OnInit {
  access: Home[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  this.getItems()
  }

  getItems(){
 
    this.apiService.getResource('access').subscribe(resp=> this.access = resp)
  }

}
