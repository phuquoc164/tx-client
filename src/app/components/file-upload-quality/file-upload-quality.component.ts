import { Constants } from 'src/app/shared/constatns';
import { ColHeader } from 'src/app/models/ColHeader';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-quality',
  templateUrl: './file-upload-quality.component.html',
  styleUrls: ['./file-upload-quality.component.css']
})
export class FileUploadQualityComponent implements OnInit {
  dataStep3:any;
  firstLine:ColHeader[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.dataStep3 = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_3);
    this.dataStep3.forEach(col => {
      let colHeader = new ColHeader(col.id, col.colName)
      colHeader.setType(col.type);
      colHeader.select();
      colHeader.dataEmpty = (col.dataEmpty) ? col.dataEmpty : 0;
      colHeader.dataError = (col.dataError) ? col.dataError : 0;
      this.firstLine.push(colHeader);
    });
    console.log("this.firstLine",this.firstLine)
  }
}
