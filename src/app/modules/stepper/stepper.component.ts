import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"],
})
export class StepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepperData: any;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._fb.group({
      firstCtrl: ["", Validators.required],
    });

    this.secondFormGroup = this._fb.group({
      secondCtrl: ["", Validators.required],
    });
  }

  onSubmit() {
    this.stepperData = {
      form1: this.firstFormGroup.value,
      form2: this.secondFormGroup.value,
    };
  }
}
