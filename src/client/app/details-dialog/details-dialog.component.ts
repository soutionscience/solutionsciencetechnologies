import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Image } from '../shared/image.model';
import { Home } from '../shared/home.model';


@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {
  myForm: FormGroup;
  image: Image;
  home: Home;

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
   .subscribe(resp=>{console.log("post responce", resp._id);
    this.apiService.addImage(this.data.dataKey, resp._id,  this.image)})
this.dialogRef.close()

  }
imageNotify(data){
  console.log("what is here", data)
  this.image = data.json();
  console.log(this.image)
}
removeImage(){
  console.log("what is in", this.image)
  this.image =undefined;
 console.log (this.image);
}

}
