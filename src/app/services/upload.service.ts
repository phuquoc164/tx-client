import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routes_api } from '../shared/routes_api';
import { LocalStorageService } from './local-storage.service';
import { Constants } from '../shared/constatns';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
    private localStorageService : LocalStorageService
  ) {
  }

  analyseFile(linkOriginale, isUseFirstLink, isDeleteFirstLink, selectAll, colsHeader): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let body = {
        linkOriginale: linkOriginale,
        isUseFirstLink: isUseFirstLink,
        isDeleteFirstLink: isDeleteFirstLink,
        selectAll: selectAll,
        colsHeader: colsHeader
      }
      this.http.post(Routes_api.analyseFile, body)
        .subscribe(
          (data) => resolve(data["data"]),
          (error) => reject(error)
        );
    });
  }

  sendInformationsFile(informationsFile){
    return new Promise<any>((resolve, reject) => {
      let linkEdited = this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_LINK_EDITED);
      let linkOriginale = this.localStorageService.getValueInSessionStorage(Constants.STORAGE_KEYS.UPLOAD_LINK_ORIGINAL);
      let body = {
        linkOriginale: linkOriginale,
        linkEdited: linkEdited,
        informationsFile: informationsFile,
      }
      this.http.post(Routes_api.informationsFile, body)
        .subscribe(
          (data) => resolve(data["data"]),
          (error) => reject(error)
        );
    });
  }
}
