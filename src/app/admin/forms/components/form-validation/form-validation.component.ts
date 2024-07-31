import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ico-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  vegDropdownSettings = {};
  veg = [];

  registerForm: FormGroup;
  advancedForm: FormGroup;
  submitted = false;
  advancedsubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.veg = [
      { item_id: 1, item_text: "Cheese" },
      { item_id: 2, item_text: "Tomatoes" },
      { item_id: 3, item_text: "Mozzarella" },
      { item_id: 4, item_text: "Mushrooms" },
      { item_id: 5, item_text: "Pepperoni" },
      { item_id: 6, item_text: "Onions"}
    ];

    this.vegDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false,
      groupBy: "category"
    };

    this.registerForm = this.formBuilder.group({
        text_input: ['', Validators.required],
        email: ['', Validators.required],
        text_area: ['', Validators.required],
        test_checkbox: [false, Validators.requiredTrue],
        gender: ['', Validators.required],
        food: ['', Validators.required]
    });

    this.advancedForm = this.formBuilder.group({
      text_input1: ['', Validators.required],
      text_input2: ['', Validators.required],
      text_input3: ['', Validators.required],
      text_input4: ['', Validators.required],
      checkbox2: ['', Validators.required],
      checkbox3: ['', Validators.required]
    });

  }

  get f() { return this.registerForm.controls; }
  get s() { return this.advancedForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onAdvancedFormSubmit() {
    this.advancedsubmitted = true;

    // stop here if form is invalid
    if (this.advancedForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.advancedForm.value, null, 4));
}

  onReset() {
    this.submitted = false;
    this.advancedsubmitted = false;
    this.registerForm.reset();
  }

}
