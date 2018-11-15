import { Constants } from './../../shared/constatns';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(
    private localStorageService:LocalStorageService
  ) { }

  ngOnInit() {
  }

  isInStep(number){
    return number <= this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP);
  }

}
