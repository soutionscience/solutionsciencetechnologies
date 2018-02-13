import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }
  @ViewChild("fileInput") fileInput;
  addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.uploadService
            .upload(fileToUpload)
            .subscribe(res => {
                // this.myNotify.emit(res)
                console.log("is this the res" , res);
            });
    }
}

}
