import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoComponent } from './components/piano/piano.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ItemSelectionComponent } from './components/buttons/item-selection/item-selection.component';
import { PianoKeyComponent } from './components/buttons/piano-key/piano-key.component';
import { EkeyType } from './components/enums/EkeyType';
import { KeyNoteComponent } from './components/key-note/key-note.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PianoComponent,
    ButtonComponent,
    ItemSelectionComponent,
    PianoKeyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Enum keys
  public blackType: EkeyType;
  public whiteType: EkeyType;

  title = 'Piano_Angular';

  constructor() {
    this.blackType = EkeyType.BLACK;
    this.whiteType = EkeyType.WHITE;
  }
}
