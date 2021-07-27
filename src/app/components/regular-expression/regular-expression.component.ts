import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-expression',
  templateUrl: './regular-expression.component.html',
  styleUrls: ['./regular-expression.component.scss'],
})
export class RegularExpressionComponent implements OnInit {
  target: string = ''
  expressOne: RegExp = /we/gi;
  expressNumber: RegExp = /\d/g;
  expressThree: RegExp = /\bAdmin\b/;
  sampleString: string = 'SuperAdmin|Admin';

  constructor() {}

  ngOnInit(): void {
    console.log(this.sampleString.match(this.expressThree));
  }

  replace() {
    this.target = this.target?.replace(this.expressOne, 'I');
    console.log(this.target);
  }

  replaceWithSymbol() {
    console.log(this.target?.replace(this.expressOne, '$& insert'));
    console.log(this.target?.replace(this.expressOne, '$` insert'));
    console.log(this.target?.replace(this.expressOne, "$' insert"));
  }

  match() {
    console.log(this.target?.match(this.expressNumber));
  }

  simpleCalculator() {
    const regularExp: RegExp = /[^0-9+-\/\*\(\)]/g;
    this.target = this.target?.replace(regularExp, '');
    this.target = eval(this.target?.toString())
  }
}
