import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})
export class FireComponent implements OnInit {
  fire: Home[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFire();
  }

  getFire(){
  this.apiService.getResource('fire')
  .subscribe(resp=> this.fire= resp)
  }

}
