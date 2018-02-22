import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Image } from '../shared/image.model';
import { Home } from '../shared/home.model';


@Component({
  selector: 'app-types-dialog',
  templateUrl: './types-dialog.component.html',
  styleUrls: ['./types-dialog.component.scss']
})
export class TypesDialogComponent implements OnInit {
  myForm: FormGroup;
  image: Image;
  home: Home;

  constructor(public dialogRef: MatDialogRef<TypesDialogComponent>,
    private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data:any,
   private apiService: ApiService) 
   {this.createForm() }

  createForm(){ //create generic form data
    this.myForm = this.fb.group({
     title: ['', [Validators.required, Validators.minLength(2)]],
     subtitle:'',
      desc:['', [Validators.required, Validators.minLength(2)]]
})
}

  ngOnInit() {  console.log("is it passing " ,this.data.parent)
  }
  onSubmit(){
    console.log(this.data.id)
    this.apiService.postResourceTypes(this.data.parent, this.data.id, this.myForm.value)
   .subscribe(resp=>{console.log("post responce check id", resp._id);
   if(this.image){
    this.postTypeImage(resp._id)
   }
  })
this.dialogRef.close()

  }
  postTypeImage(id){
    this.apiService.postResourceTypesImages(this.data.parent, this.data.id, id, this.image)
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
