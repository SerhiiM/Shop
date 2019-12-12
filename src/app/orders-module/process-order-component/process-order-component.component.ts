import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateEmail} from "../../shared-module/email.validator";

@Component({
  selector: 'app-process-order-component',
  templateUrl: './process-order-component.component.html',
  styleUrls: ['./process-order-component.component.css']
})
export class ProcessOrderComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      familyName: [''],
      email: ['', [Validators.required, Validators.email, ValidateEmail] ],
      phones: this.fb.array([this.fb.control('')]),
      pickUp: [false],
      address: ['', [Validators.required]]
    });
    this.form.get('pickUp').valueChanges.subscribe(value => {
        if (value) {
          this.form.get('address').clearValidators();
        } else {
          this.form.get('address').setValidators(Validators.required);
        }
    });
  }

  addPhoneControl() {
    (this.form.get('phones') as FormArray).push(this.fb.control(''));
  }

  deletePhoneControl(i: number) {
    (this.form.get('phones') as FormArray).removeAt(i);
  }

  onClickSubmit() {
    console.log(this.form);
  }

}
