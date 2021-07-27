import { Component, OnInit, LOCALE_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

export interface FilterObject {
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'en-AU'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class FormComponent implements OnInit {
  clientForm: any;
  myControl = new FormControl();
  filterOptions!: Observable<any>;

  options: string[] = ['Angular', 'React', 'Vue '];
  optionsObject: FilterObject[] = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue' },
  ];

  testNumber: any;

  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstname: ['Hello', { validators: Validators.required, updateOn: 'submit' }],
      lastname: ['', Validators.required],
    });

    this.filterOptions = this.myControl.valueChanges.pipe(
      map((value) => this._filter(value))
    );
  }

  handleSubmit() {
    console.log(this.clientForm);
  }

  resetForm(formDirective: FormGroupDirective) {

    formDirective.resetForm()
    // this.clientForm.reset()
    this.clientForm.reset();
  }

  _filter(value: string): FilterObject[] {
    return this.optionsObject.filter((option) =>
      option.name.toLowerCase().includes(value)
    );
  }

  displayFunc(subject: any) {
    return subject ? subject.name : undefined;
  }

  onSubmit() {
    console.log('here');
  }

  onChange(value: any) {
    this.testNumber = value;
    console.log(this.testNumber);
  }

  showContent(value: any) {
    console.log(value, 'remove clientId')
  }

  showOption(value: any) {
    console.log(value, 'add clientId')
  }
}
