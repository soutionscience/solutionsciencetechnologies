import { Component, OnInit } from '@angular/core';
import { Home } from '../shared/home.model';
import { ApiService } from '../services/api.service';
import { MatDialog, MatIcon} from '@angular/material';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { TypesDialogComponent } from '../types-dialog/types-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  home : Home[]
  fire: Home[]
  gates: Home[]
  cctv: Home[]
  alarm: Home[]
  access: Home[]

  constructor(private apiService: ApiService, private dialog: MatDialog ) { }

  ngOnInit() {
  this.getItems('cctv').subscribe(resp => this.cctv= resp)
  this.getItems('fire').subscribe(resp => this.fire= resp)
  this.getItems('gate').subscribe(resp => this.gates= resp)
  this.getItems('home').subscribe(resp => this.home = resp)
  this.getItems('alarm').subscribe(resp => this.alarm = resp)
  this.getItems('access').subscribe(resp => this.access = resp)


}
getItems(product){ return this.apiService.getResource(product)}

addItems(product){
  this.dialog.open(DetailsDialogComponent, {width: '700px' , height: 'auto',  data: {
    dataKey: product //shows which route to use when posting.
  } })
}
addItemTypes(id, parent){
  console.log(id, parent)
this.dialog.open(TypesDialogComponent, {width: '700px', height: 'auto', data:{
  id: id,
  parent:parent
}})
}
}
