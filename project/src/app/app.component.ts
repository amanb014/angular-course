import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current:string = 'recipes'
  navChangeHandler(selection: string) {
    this.current = selection
  }
}