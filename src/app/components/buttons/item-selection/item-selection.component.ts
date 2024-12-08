import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../../interfaces/IButton';
import { NgClass } from '@angular/common';

@Component({
  selector: 'item-selection',
  imports: [NgClass],
  templateUrl: './item-selection.component.html',
  styleUrls: [
    './../generalButtonStyle.css',
    './item-selection.component.css'
  ]
})
export class ItemSelectionComponent implements IButton<ItemSelectionComponent>{

  // Vars
  @Input() public value: string;
  public currentClasses: Record<string, boolean>;


  // Events
  @Output() wasPressed: EventEmitter<ItemSelectionComponent>;


  constructor() {
    // Initialize variables
    this.value = '';
    this.currentClasses = {};
    this.wasPressed = new EventEmitter();

    // Intialize some configs
    this.unselect();
  }

  // Press the  item
  pressed(): void {
    this.wasPressed?.emit(this);
  }

  // Change the style to selected item
  public select() {
    this.currentClasses = {
      "unselected": false,
      "selected": true
    };
  }

  // Change the style to unselected item
  public unselect() {
    this.currentClasses = {
      "unselected": true,
      "selected": false
    };
  }

}
