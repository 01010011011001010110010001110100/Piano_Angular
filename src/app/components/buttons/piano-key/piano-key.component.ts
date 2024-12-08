import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButton } from '../../interfaces/IButton';
import { NgClass } from '@angular/common';


@Component({
  selector: 'piano-key',
  imports: [NgClass],
  templateUrl: './piano-key.component.html',
  styleUrls: [
    './piano-key.component.css'
  ]
})
export class PianoKeyComponent implements IButton<string>{
  
  // Vars
  @Input() public name: string;
  @Input() public canBePressed: boolean;
  @Input() public currentClasses: Record<string, boolean>;
  @Output() wasPressed: EventEmitter<string>;
  private soundRelativePath: string;

  constructor() {
    // Initialize vars
    this.wasPressed = new EventEmitter();
    this.name = '';
    this.canBePressed = false;
    this.soundRelativePath = 'sounds/';
    this.currentClasses = {
      'white': true
    };
  }
  
  pressed(): void {
    // Guard clauses
    if (!this.canBePressed) return;

    this.makeSound();
    this.wasPressed?.emit(this.name);
  }

  private makeSound(): void {
    const sound: HTMLAudioElement = new Audio(this.soundRelativePath + this.name);
    sound.play();
  }
}
