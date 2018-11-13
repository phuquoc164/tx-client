import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private saveValue(key, value) {
    sessionStorage.setItem(key, value);
  }

  private getValue(key, storage) {
    return storage.getItem(key);
  }

  private saveJson(key, json) {
    sessionStorage.setItem(key, JSON.stringify(json));
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

  saveValueInSessionStorage(key, value) {
    this.saveValue(key, value);
  }

  getValueInSessionStorage(key) {
    return this.getValue(key, sessionStorage);
  }

  saveJsonInSessionStorage(key, json) {
    this.saveJson(key, json);
  }

  getJsonInsessionStorage(key) {
    return this.getJson(key, sessionStorage);
  }

  removeDataInSessionStorage(key) {
    this.removeData(key, sessionStorage);
  }

  clearSessionStorage() {
    this.clearStorage(sessionStorage);
  }

}
