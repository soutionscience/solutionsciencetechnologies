import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Fire } from '../shared/fire.model';

@Component({
  selector: 'app-admin-fire',
  templateUrl: './admin-fire.component.html',
  styleUrls: ['./admin-fire.component.css']
})
export class AdminFireComponent implements OnInit {
  fire: Fire[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFire()
  }
  getFire(){
    this.apiService.getResource('fire')
    .subscribe(resp => this.fire = resp )
  }

}
