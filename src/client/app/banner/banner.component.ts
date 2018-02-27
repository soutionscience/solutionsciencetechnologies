import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActualContactDialogComponent } from '../actual-contact-dialog/actual-contact-dialog.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  contactUs(){
    this.dialog.open(ActualContactDialogComponent, {width: '50%', height:'auto'})
}

}
