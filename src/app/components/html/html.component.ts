import { Component, Host, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[bsb-format]',
})
export class BsbFormatDirective {
  bsbformatFunction(trimmed: string) {
    if (trimmed.length > 6) {
      trimmed = trimmed.substr(0, 6);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 3) {
      numbers.push(trimmed.substr(i, 3));
    }

    return numbers
  }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/[^0-9\.]+/g, '');
    let numbers = this.bsbformatFunction(trimmed)

    input.value = numbers.join('-');
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const input = event.target as HTMLInputElement;

    let clipboardData = event.clipboardData;
    let pastedText = clipboardData?.getData('text') || '';

    let trimmed = pastedText?.replace(/[^0-9\.]+/g, '');
    let numbers = this.bsbformatFunction(trimmed)

    input.value = numbers.join('-');
  }
}

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit {
  paymentForm: FormGroup = this.fb.group({
    bsb: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.paymentForm.get('bsb')?.value);
  }
}
