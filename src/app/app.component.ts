import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isUpload: boolean = true;
  isRestitution: boolean = false; 

  constructor (){

  }

  ngOnInit(){
    
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
