import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})
export class AlarmsComponent implements OnInit {

  alarm: Home[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getItems()
  }
  getItems(){
 
    this.apiService.getResource('alarm').subscribe(resp=> this.alarm = resp)
  }

}
