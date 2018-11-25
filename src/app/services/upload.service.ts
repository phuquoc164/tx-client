import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Routes_api } from '../shared/routes_api';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
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
}
