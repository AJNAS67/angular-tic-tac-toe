import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbLayoutModule, NbButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tic-tac-toe';
}
