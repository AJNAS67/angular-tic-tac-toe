import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  template: `
    <!-- <button nbButton *ngIf="!value">{{ value }}</button> -->
    @if (!value) {
        <button>{{value}}</button>
    }
    @if(value=='X'){

        <button style="background-color: aqua;" status="success">{{ value }}</button>
    }
    @if(value=='O'){
    <button  style="background-color: bisque;" status="info">{{ value }}</button>

    }
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {

  @Input()
    value!: 'X' | 'O';

}
