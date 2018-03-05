import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Home } from '../shared/home.model';
import { flyInOut } from '../animations/app.animations';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.scss'],
  host: {'[@flyInOut]': 'true', 'style': 'display: block'},
  animations: [flyInOut()]
})
export class GatesComponent implements OnInit {
gates: Home[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
 this.getGates();
  }

  getGates(){
    this.apiService.getResource('gate')
    .subscribe(resp => this.gates = resp)
  }

}
