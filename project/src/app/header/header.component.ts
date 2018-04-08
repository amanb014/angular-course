import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navSelection = new EventEmitter<string>()

  onNavChange(selection: string) {
    console.log(selection)
    this.navSelection.emit(selection)
  }
}
