import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameRef: ElementRef;
  @ViewChild('inputAmount') amtRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  constructor() { }
  ngOnInit() {
  }

  onAddHandler() {
    const name = this.nameRef.nativeElement.value;
    const amt = this.amtRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amt);
    this.ingredientAdded.emit(newIngredient);
  }
}
