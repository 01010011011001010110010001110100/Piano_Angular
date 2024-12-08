import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PianoKeyComponent } from '../buttons/piano-key/piano-key.component';
import { KeyNoteComponent } from '../key-note/key-note.component';
import { ItemSelectionComponent } from '../buttons/item-selection/item-selection.component';
import { ButtonComponent } from '../buttons/button/button.component';
import { EkeyType } from '../enums/EkeyType';

import * as PianoSoundsNames from '../../../../public/configs/PianoSoundsNames.json';
import * as PianoBlacksKeysSpaces from '../../../../public/configs/BlackPianoKeysSpaces.json';

@Component({
  selector: 'piano',
  imports: [
    ButtonComponent,
    PianoKeyComponent,
    KeyNoteComponent,
    ItemSelectionComponent
  ],
  templateUrl: './piano.component.html',
  styleUrl: './piano.component.css'
})
export class PianoComponent {

  // Vars
  public power: boolean;
  
  // Vars History keys
  public keysHirtory: any[];
  public blackKeyType: EkeyType;
  public whitekKeyType: EkeyType;
  
  // Vars octave selection
  public octaves: Record<string, Record<string, string[]>>;
  public lastOctaveSelected: ItemSelectionComponent | null;
  public currentOctaveSelected: ItemSelectionComponent | null;

  // Vars Other
  public blackKeysSpaces: Record<string, string[]>;

  // Vars mouse position
  @ViewChild('keyHistory') public keyHistoryElement!: ElementRef; // BY [GPT]
  public mouseX: number;
  public mouseY: number; 


  constructor() {
    // Initialize variables
    this.power = false;
    this.octaves = (PianoSoundsNames as any).default.octaves;
    this.keysHirtory = [];
    this.lastOctaveSelected = null;
    this.currentOctaveSelected = null;
    this.blackKeysSpaces = (PianoBlacksKeysSpaces as any).default.octaves;
    this.blackKeyType = EkeyType.BLACK;
    this.whitekKeyType = EkeyType.WHITE;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  // Change the power of the piano
  public changePower(): void {
    this.power = !this.power;
  }

  // Add the key note to the history keys
  public addKeyToTheHistory(keyName: string, keyType: EkeyType): void {

    // add the key
    this.keysHirtory.push({
      name: keyName,
      type: keyType,
      x: this.mouseX,
      y: this.mouseY
    });

    // Clena at certein amout
    if (this.keysHirtory.length == 100) {
      this.keysHirtory = [];
    }
  }

  // Set Octaves
  public setOctaves(octaveSelected: ItemSelectionComponent): void {

    // Set current octave to last octave
    this.lastOctaveSelected = this.currentOctaveSelected;

    // Set current octave 
    this.currentOctaveSelected = octaveSelected;

    // Change states of items selected
    this.lastOctaveSelected?.unselect();
    this.currentOctaveSelected?.select();
  }

  // Get Octaves
  public getNamesOctaves(): string[] {
    return Object.keys(this.octaves);
  }

  // Track the position of the mouse [MADE BY GPT]
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {

    const rect = this.keyHistoryElement.nativeElement.getBoundingClientRect();

    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;

    console.log(`X:${this.mouseX} - Y:${this.mouseY}`)
  }
  
}
