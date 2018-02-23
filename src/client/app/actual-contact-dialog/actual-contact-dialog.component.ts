import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-actual-contact-dialog',
  templateUrl: './actual-contact-dialog.component.html',
  styleUrls: ['./actual-contact-dialog.component.scss']
})
export class ActualContactDialogComponent implements OnInit {

  myForm: FormGroup;
  sending = false;


  constructor(private fb: FormBuilder, private apiService: ApiService,
     public dialogRef: MatDialogRef<ActualContactDialogComponent>) { this.createForm()}

  ngOnInit() {
  }
  createForm(){
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: '',
      product: '',
      message: ''
    });
  }
  onSubmit(){
    this.sending = true;
this.apiService.postResource('contact', this.myForm.value).
subscribe(resp => {this.sending = false; });
this.myForm.reset('');
this.dialogRef.close();

  }

}
