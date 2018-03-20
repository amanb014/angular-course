import { Component } from '@angular/core';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[];
  even: number[];

  constructor() {
    this.odd = [];
    this.even = [];
  }

  handleCounter(num: number) {
    if(num % 2 === 0) {
      this.even.push(num);
    } else {
      this.odd.push(num);
    }
  }
}
