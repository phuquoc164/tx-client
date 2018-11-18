import { Constants } from 'src/app/shared/constatns';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ColHeader } from 'src/app/models/ColHeader';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {
  firstLine:any;
  isUseFirstLink:any = true;
  isDeleteFirstLink:any = true;
  arrayHeaderEmpty: ColHeader[] = [];
  
  constructor(
    private localStorageService :LocalStorageService
  ) { }

  ngOnInit() {
    this.firstLine = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_1);
    this.firstLine.forEach((e,i) => {
      let col = new ColHeader(i, e);
      this.arrayHeaderEmpty.push(col);
    });
  }

  useFirstLink(value){
    if(value == 'false' || value == false ){
      this.isUseFirstLink = false;
    }else {
      this.isUseFirstLink = true;
    }
  }

  deleteFirstLink(value){
    if(value == 'false' || value == false ){
      this.isDeleteFirstLink = false;
    }else {
      this.isDeleteFirstLink = true;
    }
  }

  submit(){
    let isValid = true;
    console.log("this.isUseFirstLink",this.isUseFirstLink);
    console.log("this.isDeleteFirstLink",this.isDeleteFirstLink);
    console.log("this.arrayHeaderEmpty",this.arrayHeaderEmpty);
    if (!this.isUseFirstLink) {
      this.arrayHeaderEmpty.forEach(col => {
        if (col.colName == "") isValid = false
      })
    }

    if (isValid) {
      let data = {
        isUseFirstLink: this.isUseFirstLink,
        isDeleteFirstLink: this.isDeleteFirstLink,
        names: this.arrayHeaderEmpty
      }
      this.localStorageService.saveJsonInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_2,data)
      this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,3)
    
    }
  }
}
