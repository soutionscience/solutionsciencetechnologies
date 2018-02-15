import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Home } from '../shared/home.model';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.scss']
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
