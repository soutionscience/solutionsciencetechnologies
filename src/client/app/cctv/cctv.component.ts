import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.scss']
})
export class CctvComponent implements OnInit {
cctv: Home[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getItems();
  }
 getItems(){
   this.apiService.getResource('cctv').subscribe(resp=> this.cctv = resp)
 }
}
