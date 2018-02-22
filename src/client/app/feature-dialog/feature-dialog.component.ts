import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Image } from '../shared/image.model';
import { Home } from '../shared/home.model';

@Component({
  selector: 'app-feature-dialog',
  templateUrl: './feature-dialog.component.html',
  styleUrls: ['./feature-dialog.component.scss']
})
export class FeatureDialogComponent implements OnInit {
  myForm: FormGroup;
  home: Home;

  constructor(public dialogRef: MatDialogRef<FeatureDialogComponent>,
    private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:any,
   private apiService: ApiService) {this.createForm(); }

   createForm(){ // create generic form data
    this.myForm = this.fb.group({
     title: '',
     subtitle: '',
      desc:['', [Validators.required, Validators.minLength(2)]]
})
}

  ngOnInit() {
  }
  onSubmit(){
this.apiService.postResourceTypesFeatures(this.data.parent, this.data.parentId, this.data.id, this.myForm.value);
  this.dialogRef.close()
}

}
