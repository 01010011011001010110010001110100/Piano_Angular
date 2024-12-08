import { Component, Input } from '@angular/core';
import { EkeyType } from '../enums/EkeyType';

@Component({
  selector: 'key-note',
  imports: [],
  templateUrl: './key-note.component.html',
  styleUrl: './key-note.component.css'
})
export class KeyNoteComponent {
    // Vars
    @Input() public name: string;
    @Input() public posX: number;
    @Input() public posY: number;
    @Input() public currentType: EkeyType;
    public blackType: EkeyType;
    public whiteType: EkeyType;


    constructor() {
      // Initialize variables
      this.name = '';
      this.posX = 0;
      this.posY = 0;
      this.blackType = EkeyType.BLACK;
      this.whiteType = EkeyType.WHITE;
      this.currentType = this.whiteType;
    }
}
