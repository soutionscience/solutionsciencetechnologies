import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {
  myForm: FormGroup

  constructor( public dialogRef: MatDialogRef<DetailsDialogComponent>,
    private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data:any,
   private apiService: ApiService) 
  { this.createForm() }

  createForm(){ //create generic form data
    this.myForm = this.fb.group({

      title: '',
      desc:''

    })

  }

  ngOnInit() { console.log(this.data.dataKey)}

  onSubmit(){

    this.apiService.postResource(this.data.dataKey, this.myForm.value)
    this.dialogRef.close()

  }


}
