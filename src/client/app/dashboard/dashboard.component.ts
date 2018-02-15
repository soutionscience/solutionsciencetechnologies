import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import { MatDialog, MatIcon} from '@angular/material';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  home : Home[]
  fire: Home[]

  constructor(private apiService: ApiService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.getHome();
    this.getFire();
  }
  getHome(){
  this.apiService.getResource('home')
  .subscribe(resp => this.home = resp)
  }
  getFire(){
    this.apiService.getResource('fire')
    .subscribe(resp=> this.fire = resp)
  }
addHome(){
  this.dialog.open(DetailsDialogComponent, {width: '700px' , height: 'auto',  data: {
    dataKey: 'home' //shows which route to use when posting.
  } })

}
addFire(){
  this.dialog.open(DetailsDialogComponent, {width: '700px' , height: 'auto',  data: {
    dataKey: 'fire' //shows which route to use when posting.
  } })
}
addGate(){
  this.dialog.open(DetailsDialogComponent, {width: '700px' , height: 'auto',  data: {
    dataKey: 'gate' //shows which route to use when posting.
  } })
}
}
