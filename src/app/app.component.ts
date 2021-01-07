import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedDate: any;
  name = 'Angular 6';

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }
}
