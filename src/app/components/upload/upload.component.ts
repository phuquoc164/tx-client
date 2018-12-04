import { Constants } from 'src/app/shared/constatns';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  step:number = 5;
  constructor(
    private localStorageService: LocalStorageService
  ) { 
    this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,1);
  }

  ngOnInit() {
  }

  isInStep(number){
    return number == this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP);
  }
}
