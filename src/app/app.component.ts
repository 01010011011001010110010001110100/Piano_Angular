import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoComponent } from './components/piano/piano.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PianoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Piano_Angular';
}
