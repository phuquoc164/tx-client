import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Constants } from 'src/app/shared/constatns';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.css']
})
export class FileSelectionComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: Constants.ROOT_URL + 'upload', itemAlias: 'csv' });
  error:any;
  constructor(
    private localStorageService:LocalStorageService
  ) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      if (status == 200) {
        let data = JSON.parse(response);
        if (data['success'] == true){
          this.localStorageService.saveValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP,2);  
          this.localStorageService.saveJsonInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_STEP_1,data['firstRow']);  
        }else {
          this.error == "Il n'y a un problème. Merci de re-éssayer"
        }
      }else{
        this.error == "Il n'y a un problème. Merci de re-éssayer"
      }
    };
  }

}
