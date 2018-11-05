import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isUpload: boolean = true;
  isRestitution: boolean = false; 
  responseServer: any;

  constructor (
    private http : HttpClient
  ){

  }

  ngOnInit(){
    this.http.get('http://localhost:9001/').subscribe(
      data => {
        this.responseServer = data['message'];
      },
      error => {
        console.log(error);
      }
    );
  }

  selectPage(num){
    if (num == 0) {
      this.isUpload = true;
      this.isRestitution = false;
    }else {
      this.isUpload = false;
      this.isRestitution = true; 
    }
  }
}
