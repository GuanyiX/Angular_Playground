import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  data: string = "This is the data from parent";
  likedNumber: number = 0;
  dislikedNumber: number = 0;

  allow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  allowToCalculate() {
    this.allow = true;
  }

  onCounterChange(event: any) {
    console.log(event)
    this.likedNumber = event
  }

}
