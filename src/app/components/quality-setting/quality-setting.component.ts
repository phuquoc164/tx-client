import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Constants } from 'src/app/shared/constatns';
import { ColHeader } from 'src/app/models/ColHeader';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-quality-setting',
  templateUrl: './quality-setting.component.html',
  styleUrls: ['./quality-setting.component.css']
})
export class QualitySettingComponent implements OnInit {
  dataSetting: any;
  dataErrorOrEmpty: any;
  firstLine: any = [];
  optionsOptimisationDataFail: any = {};
  optionsOptimisationDataEmpty: any = {};
  isLoading:boolean = false;
  isFinish:boolean = false;
  selectedColID: any;
  valueFieldFail = {};
  valueFieldEmpty = {};
  constructor(
    private localStorageService: LocalStorageService,
    private uploadService: UploadService
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
      this.valueFieldFail[col.id] = 0;
      this.valueFieldEmpty[col.id] = 0;
      this.optionsOptimisationDataFail[colHeader.id] = { name: colHeader.colName, isNoChange: true, isDeleteRow: false, isDeleteField: false, isFillIn: false, fill: "" };
      this.optionsOptimisationDataEmpty[colHeader.id] = { name: colHeader.colName, isNoChange: true, isDeleteRow: false, isDeleteField: false, isFillIn: false, fill: "" };
    });
    console.log("this.firstLine", this.firstLine)
    this.selectedColID = this.firstLine[0].id;

    this.dataErrorOrEmpty = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.DATA_EMPTY_OR_ERROR);
    console.log("this.dataErrorOrEmpty", this.dataErrorOrEmpty)
  }

  changeValueFail(id, event) {
    this.optionsOptimisationDataFail[id].isDeleteRow = false;
    this.optionsOptimisationDataFail[id].isDeleteField = false;
    this.optionsOptimisationDataFail[id].isFillIn = false;
    this.optionsOptimisationDataFail[id].isNoChange = false;
    console.log(id)
    console.log(event.target.value)
    this.valueFieldFail[id] = event.target.value;
    switch (event.target.value) {
      case "deleterow":
        this.optionsOptimisationDataFail[id].isDeleteRow = true;
        break;
      case "deletefield":
        this.optionsOptimisationDataFail[id].isDeleteField = true;
        break;
      case "fillin":
        this.optionsOptimisationDataFail[id].isFillIn = true;
        break;
      default:
        this.optionsOptimisationDataFail[id].isNoChange = true;
    }
    console.log(this.valueFieldFail[id])

    console.log(this.optionsOptimisationDataFail[id])
  }

  selectCol(event) {
    console.log(event);
    this.selectedColID = event.target.value;
  }

  changeValueEmpty(id, event) {
    this.optionsOptimisationDataEmpty[id].isDeleteRow = false;
    this.optionsOptimisationDataEmpty[id].isDeleteField = false;
    this.optionsOptimisationDataEmpty[id].isFillIn = false;
    this.optionsOptimisationDataEmpty[id].isNoChange = false;
    console.log(id)
    console.log(event.target.value)
    this.valueFieldEmpty[id] = event.target.value;
    switch (event.target.value) {
      case "deleterow":
        this.optionsOptimisationDataEmpty[id].isDeleteRow = true;
        break;
      case "deletefield":
        this.optionsOptimisationDataEmpty[id].isDeleteField = true;
        break;
      case "fillin":
        this.optionsOptimisationDataEmpty[id].isFillIn = true;
        break;
      default:
        this.optionsOptimisationDataEmpty[id].isNoChange = true;
    }
    console.log(this.optionsOptimisationDataEmpty[id])
  }

  submit(){
    this.isLoading = true;
    this.uploadService.improveData(this.firstLine,this.optionsOptimisationDataEmpty,this.optionsOptimisationDataFail).then((data) =>{
      console.log(data)
      this.isLoading = false;
      this.firstLine = [];
      data.datasFile.forEach(col => {
        let colHeader = new ColHeader(col.id, col.colName)
        colHeader.setType(col.type);
        colHeader.select();
        colHeader.dataEmpty = (col.dataEmpty) ? col.dataEmpty : 0;
        colHeader.dataError = (col.dataError) ? col.dataError : 0;
        this.firstLine.push(colHeader);
        this.isFinish = true;
      });  
    }).catch(err => {
      this.isLoading = false;
      console.error(err)
    })
  }

  goHome(){
    this.localStorageService.clearSessionStorage();
    this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,1);
  }
}
