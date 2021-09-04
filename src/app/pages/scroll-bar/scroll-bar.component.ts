import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const menuAnimation =
  trigger('menuAnimation', [
    state('opened', style({ opacity: 1 })),
    state('closed', style({ opacity: 0, width: '0px', display: 'none' })),
    transition('* => *', [
      animate(500)
    ])
  ]);

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss'],
  animations: [menuAnimation]
})
export class ScrollBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state = 'opened';

  toggleState() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }
}
