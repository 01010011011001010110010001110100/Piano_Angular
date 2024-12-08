import { Component, EventEmitter, Output } from '@angular/core';
import { IButton } from '../../interfaces/IButton';

@Component({
  selector: 'button-switch',
  templateUrl: './button-switch.component.html',
  styleUrls: [
    './button-switch.component.css',
    './../generalButtonStyle.css'
  ]
})
export class ButtonSwitchComponent implements IButton<boolean> {

  // vars
  private power: boolean;
  @Output() wasPressed: EventEmitter<boolean>;

  constructor() {

    // Initialize vars
    this.wasPressed = new EventEmitter();
    this.power = false;
  }

  // Button was pressed
  pressed(): void {
    this.changePower();
    this.wasPressed?.emit(this.power);
  }

  // Change state of the button switch
  private changePower(): void {
    this.power = !this.power;
  }
}
