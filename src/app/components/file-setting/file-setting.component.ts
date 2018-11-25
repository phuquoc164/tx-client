import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Constants } from 'src/app/shared/constatns';
import { ColHeader } from 'src/app/models/ColHeader';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-file-setting',
  templateUrl: './file-setting.component.html',
  styleUrls: ['./file-setting.component.css']
})
export class FileSettingComponent implements OnInit {
  firstLine:ColHeader[] = [];
  selectAll:any = true;
  dataStep2:any;
  typeData: String[] = Constants.TYPE_DATA;
  constructor(
    private localStorageService :LocalStorageService,
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    console.log("this.typeData", this.typeData);
    this.dataStep2 = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_2);
    this.dataStep2.names.forEach(col => {
      // let colHeader = new ColHeader(col.id, col.colName);
      this.firstLine.push(new ColHeader(col.id, col.colName));
    });
  } 
  submit(){
    console.log("this.selectAll",this.selectAll);
    console.log("this.firstLine",this.firstLine);

    this.uploadService.analyseFile(
      this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_LINK_ORIGINAL),
      this.dataStep2.isUseFirstLink,
      this.dataStep2.isDeleteFirstLink,
      this.selectAll,
      this.firstLine
    ).then(data => {
      this.localStorageService.saveJsonInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_3, data);
      this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,4);
      console.log(data)
    })
    .catch(error => console.error(error))
  }
}
