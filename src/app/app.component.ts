import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarModule,
} from '@nebular/theme';
import { BoardComponent } from './components/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
   
    imports: [RouterOutlet,BoardComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-tic-tac-toe';
}
