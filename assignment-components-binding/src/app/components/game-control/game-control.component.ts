import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('counter') counter: EventEmitter<number>;
  perSecond: any;
  current: number;

  constructor() {
    this.counter = new EventEmitter<number>();
    this.current = 0;
    this.startGameHandler();
  }

  ngOnInit() {}

  stopGameHandler() {
    clearInterval(this.perSecond);
  }

  startGameHandler() {
    this.perSecond = setInterval(() => {
      this.counter.emit(this.current++);
     }, 1000);
  }
}
