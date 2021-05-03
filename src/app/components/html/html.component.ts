import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgControl,
  NgModel,
  Validators,
} from '@angular/forms';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[bsb-format]',
})
export class BsbFormatDirective {
  constructor(private control: NgControl) {}

  pastedValue: string = '';

  bsbformatFunction(trimmed: string) {
    if (trimmed.length > 6) {
      trimmed = trimmed.substr(0, 6);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 3) {
      numbers.push(trimmed.substr(i, 3));
    }

    return numbers;
  }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = this.pastedValue
      ? this.pastedValue.replace(/[^0-9\.]+/g, '')
      : input.value.replace(/[^0-9\.]+/g, '');
    let numbers = this.bsbformatFunction(trimmed);

    input.value = numbers.join('-');
    this.pastedValue = '';

    this.control.control?.setValue(input.value);
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    this.pastedValue = clipboardData?.getData('text') || '';
  }
}

@Directive({
  selector: '[bsb-model-format]',
})
export class BsbModelFormatDirective {
  constructor(private model: NgModel) {}

  pastedValue: string = '';

  bsbformatFunction(trimmed: string) {
    if (trimmed.length > 6) {
      trimmed = trimmed.substr(0, 6);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 3) {
      numbers.push(trimmed.substr(i, 3));
    }

    return numbers;
  }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = this.pastedValue
      ? this.pastedValue.replace(/[^0-9\.]+/g, '')
      : input.value.replace(/[^0-9\.]+/g, '');
    let numbers = this.bsbformatFunction(trimmed);

    input.value = numbers.join('-');
    this.pastedValue = '';
    this.model.update.emit(input.value)
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    this.pastedValue = clipboardData?.getData('text') || '';
  }
}

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss'],
})
export class HtmlComponent implements OnInit {
  @ViewChild('test') test!: ElementRef;

  paymentForm: FormGroup = this.fb.group({
    bsb: ['', [Validators.required]],
  });

  bsbModel: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.paymentForm.get('bsb')?.value);
  }
}
