import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import { CustomeDateValidators } from "./expiryDate.validator";

@Component({
  selector: "app-creditcard-form",
  templateUrl: "./creditcard-form.component.html",
  styleUrls: ["./creditcard-form.component.css"],
})
export class CreditcardFormComponent implements OnInit {
  basicForm: FormGroup;
  //frmArrayForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.basicForm = this.fb.group(
      {
        cardType: [null, [Validators.required]],
        cardNumber: [null, [Validators.required, Validators.minLength(16)]],
        expiryMonth: [null, [Validators.required]],
        expiryYear: [null, Validators.required],
        cvv: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.minLength(4),
          ],
        ],
      },
      {
        validators: [CustomeDateValidators.expiryDateValidation()],
      }
    );
  }

  onSubmitBasicForm() {
    if (this.basicForm.invalid) {
      return;
    }
    console.log(this.basicForm.value); //not include disable value
    console.log(this.basicForm.getRawValue()); //include all types of value
  }
  get f1() {
    return this.basicForm.controls;
  }
}
