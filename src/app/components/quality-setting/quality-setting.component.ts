import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Constants } from 'src/app/shared/constatns';
import { ColHeader } from 'src/app/models/ColHeader';

@Component({
  selector: 'app-quality-setting',
  templateUrl: './quality-setting.component.html',
  styleUrls: ['./quality-setting.component.css']
})
export class QualitySettingComponent implements OnInit {
  dataSetting:any;
  dataErrorOrEmpty:any;
  firstLine:any = [];
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.dataSetting = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_3);
    this.dataSetting.forEach(col => {
      let colHeader = new ColHeader(col.id, col.colName)
      colHeader.setType(col.type);
      colHeader.select();
      colHeader.dataEmpty = (col.dataEmpty) ? col.dataEmpty : 0;
      colHeader.dataError = (col.dataError) ? col.dataError : 0;
      this.firstLine.push(colHeader);
    });
    console.log("this.firstLine",this.firstLine)

    this.dataErrorOrEmpty = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.DATA_EMPTY_OR_ERROR);
    console.log("this.dataErrorOrEmpty",this.dataErrorOrEmpty)
  }

}
