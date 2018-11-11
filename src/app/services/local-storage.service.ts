import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private saveValue(key, value) {
    localStorage.setItem(key, value);
  }

  private getValue(key, storage) {
    return storage.getItem(key);
  }

  private saveJson(key, json) {
    localStorage.setItem(key, JSON.stringify(json));
  }

  private getJson(key, storage) {
    return JSON.parse(storage.getItem(key));
  }

  private removeData(key, storage) {
    storage.removeItem(key);
  }

  private clearStorage(storage) {
    storage.clear();
  }

  saveValueInLocalStorage(key, value) {
    this.saveValue(key, value);
  }

  getValueInLocalStorage(key) {
    return this.getValue(key, localStorage);
  }

  saveJsonInLocalStorage(key, json) {
    this.saveJson(key, json);
  }

  getJsonInLocalStorage(key) {
    return this.getJson(key, localStorage);
  }

  removeDataInLocalStorage(key) {
    this.removeData(key, localStorage);
  }

  clearLocalStorage() {
    this.clearStorage(localStorage);
  }

}
