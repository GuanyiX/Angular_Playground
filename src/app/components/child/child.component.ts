import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() status: boolean = false;
  value: number = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
    // console.log(this.allData)
  }

  onIncrement() {
    this.value = this.value + 1;
    console.log(this.value)
    this.countChanged.emit(this.value)
  }

  onDecrement() {
    this.value = this.value - 1;
    this.countChanged.emit(this.value)
  }


}
