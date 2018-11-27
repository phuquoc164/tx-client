import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

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
  isFN: boolean = true;

  constructor (
    // private http : HttpClient
    private translate: TranslateService,
  ){
    this.translate.setDefaultLang('fr');
  }

  ngOnInit(){
    // this.http.get('http://localhost:9001/').subscribe(
    //   data => {
    //     this.responseServer = data['message'];
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
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

  selectLang(lang){
    if (lang == "en"){
      this.isFN = false;
      this.translate.use('en');
    }else {
      this.isFN = true;
      this.translate.use('fr');
    }
  }
}
