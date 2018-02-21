import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
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
