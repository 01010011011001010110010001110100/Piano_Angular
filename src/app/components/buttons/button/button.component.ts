import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../../interfaces/IButton';

@Component({
  selector: 'buttonComp',
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.css',
    './../generalButtonStyle.css'
  ]
})
export class ButtonComponent implements IButton<any> {

  // Varas
  @Input() boostrapIcon: string;

  // Events
  @Output() wasPressed: EventEmitter<any>;

  constructor() {
    // Initialize variables
    this.boostrapIcon = '';
    this.wasPressed = new EventEmitter();
  }

  pressed(): void {
    this.wasPressed?.emit();
  }
}
