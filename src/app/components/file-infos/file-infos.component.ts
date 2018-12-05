import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Constants } from 'src/app/shared/constatns';

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
    private uploadService: UploadService,
    private localStorageService: LocalStorageService
  ) { 
    this.informationForm = this.formBuilder.group({
      fileName: ['',Validators.required],
      autor: ['',Validators.required],
      description: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  enterKeyword(){
    console.log(this.keyword);
    if (this.keyword && this.keyword != '') {
      this.keywordsList.push(this.keyword);
      this.keyword = "";
    }
  }

  submit(){
    if (this.informationForm.valid) {
      this.informationForm.value['keywords'] = this.keywordsList
      console.log(this.informationForm.value);
      this.uploadService.sendInformationsFile(this.informationForm.value).then(data => {
        console.log(data);
        this.localStorageService.saveJsonInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_5, data);
        this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,6);
      });
    }
  }
}