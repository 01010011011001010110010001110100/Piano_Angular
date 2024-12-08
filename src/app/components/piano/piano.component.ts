import { Component } from '@angular/core';
import { ButtonSwitchComponent } from '../buttons/button-switch/button-switch.component';
import { PianoKeyComponent } from '../buttons/piano-key/piano-key.component';
import { KeyNoteComponent } from '../key-note/key-note.component';
import { ItemSelectionComponent } from '../buttons/item-selection/item-selection.component';
import * as PianoSoundsNames from '../../../../public/configs/PianoSoundsNames.json';
import * as PianoBlacksKeysSpaces from '../../../../public/configs/BlackPianoKeysSpaces.json';

@Component({
  selector: 'piano',
  imports: [
    ButtonSwitchComponent,
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
  public octaves: Record<string, Record<string, string[]>>;
  public keysHirtory: string[];

  // Vars octave selection
  public lastOctaveSelected: ItemSelectionComponent | null;
  public currentOctaveSelected: ItemSelectionComponent | null;

  // Vars Other
  public BlackKeysSpaces: Record<string, string[]>;

  constructor() {
    // Initialize variables
    this.power = false;
    this.octaves = (PianoSoundsNames as any).default.octaves;
    this.keysHirtory = [];
    this.lastOctaveSelected = null;
    this.currentOctaveSelected = null;
    this.BlackKeysSpaces = (PianoBlacksKeysSpaces as any).default.octaves;
  }

  // Change the power of the piano
  public changePower(): void {
    this.power = !this.power;
  }

  // Add the key note to the history keys
  public addKeyToTheHistory(keyName: string): void {

    // add the key
    this.keysHirtory.push(keyName);

    // Remove the key at certein time
    setTimeout(() => {
      this.keysHirtory.shift();
    }, 2500);
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

}
