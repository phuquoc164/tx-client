import { Constants } from 'src/app/shared/constatns';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {
  firstLine:any;
  
  constructor(
    private localStorageService :LocalStorageService
  ) { }

  ngOnInit() {
    this.firstLine = this.localStorageService.getJsonInsessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_1);
  }

}
