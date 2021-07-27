import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ],
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  isOpen: boolean = true;
  divClicked: boolean = false;

  dogMoved: boolean = false;

  click_account: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.dogMoved = true;

    // setInterval(() => {
    //   this.click_account = (this.click_account + 1) % 3
    // }, 3000)
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  handleColorChange() {
    this.divClicked = !this.divClicked
  }

  handleClick(direction: string) {
    if(direction === 'left') {
      this.click_account = Math.abs(this.click_account - 1 + 3) % 3;
    } else if(direction === 'right') {
      this.click_account = Math.abs(this.click_account + 1 + 3) % 3;
    }
  }

}
