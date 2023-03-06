import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count:number = 0;
  hide:boolean = true;

  onClick(){
    this.count++;
  }

  imgClick(){
    if(this.hide === true){
      this.hide = false;
    }
    else{
      this.hide = true;
    }
  }

}
