import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-file-infos',
  templateUrl: './file-infos.component.html',
  styleUrls: ['./file-infos.component.css']
})
export class FileInfosComponent implements OnInit {
  informationForm:any;
  keyword:any;
  keywordsList:any = [];
  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService
  ) { 
    this.informationForm = this.formBuilder.group({
      fileName: ['',Validators.required],
      autor: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  submit() {
    
  }

=======
  enterKeyword(){
    console.log(this.keyword)
    this.keywordsList.push(this.keyword);
    this.keyword = "";
  }

  submit(){
    if (this.informationForm.valid) {
      this.informationForm.value['keywords'] = this.keywordsList
      console.log(this.informationForm.value);
      this.uploadService.sendInformationsFile(this.informationForm.value).then(data => {
        console.log(data);
      })
    }
  }
>>>>>>> bao
}
