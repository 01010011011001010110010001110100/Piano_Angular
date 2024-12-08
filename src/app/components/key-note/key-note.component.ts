import { Component, Input } from '@angular/core';

@Component({
  selector: 'key-note',
  imports: [],
  templateUrl: './key-note.component.html',
  styleUrl: './key-note.component.css'
})
export class KeyNoteComponent {
    // Vars
    @Input() name: string;

    constructor() {
      this.name = '';
    }
}
