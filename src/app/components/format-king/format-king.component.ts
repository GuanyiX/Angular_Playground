import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-king',
  templateUrl: './format-king.component.html',
  styleUrls: ['./format-king.component.scss']
})
export class FormatKingComponent implements OnInit {

  maskContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
