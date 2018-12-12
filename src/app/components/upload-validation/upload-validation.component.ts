import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Constants } from 'src/app/shared/constatns';

@Component({
  selector: 'app-upload-validation',
  templateUrl: './upload-validation.component.html',
  styleUrls: ['./upload-validation.component.css']
})
export class UploadValidationComponent implements OnInit {
  informationForm:any;
  keyword:any;
  keywordsList:any = [];
  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private localStorageService: LocalStorageService
  ) { 
  }

  ngOnInit() {
    let data = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_5);
    this.informationForm = this.formBuilder.group({
      fileName: [data.fileName,Validators.required],
      autor: [data.autor,Validators.required],
      description: [data.description,Validators.required],
      keyword: [data.keywords.toString(),Validators.required]
    });
  }

  goQualitySetting(){
    this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,7);
  }

  goHome(){
    this.localStorageService.clearSessionStorage();
    this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,1);
  }
}
