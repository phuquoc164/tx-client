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
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }

  isInStep(number) {
    let stepActual = this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP);
    let isInstep;
    switch (stepActual) {
      case "1":
        if (number == 1) isInstep = true;
        else isInstep = false
        break;
      case "2":
        if (number <= 2) isInstep = true;
        else isInstep = false
        break;
      case "3":
        if (number <= 2) isInstep = true;
        else isInstep = false
        break;
      case "4":
        if (number <= 2) isInstep = true;
        else isInstep = false
        break;
      case "5":
        console.log(number)
        if (number <= 3) isInstep = true;
        else isInstep = false
        break;
      case "6":
        if (number <= 4) isInstep = true;
        else isInstep = false
        break;
    }
    return isInstep
  }
}
