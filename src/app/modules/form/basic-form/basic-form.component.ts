import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatCheckboxChange } from "@angular/material";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"],
})
export class BasicFormComponent implements OnInit {
  basicForm: FormGroup;
  //frmArrayForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.basicForm = this.fb.group({
      name: [
        null,
        {
          validators: [Validators.required],
          //asyncValidators:[],
          //updateOn: 'change' | 'blur' | 'submit';
        },
      ],
      description: [null, Validators.required],
      gender: [null, Validators.required],
      hobby: [null, Validators.required],
      tc: [false, Validators.requiredTrue],
      chkValidation: [false],
      extra: { value: null, disabled: true },
    });

    this.basicForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.basicForm.get("hobby").valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.basicForm.statusChanges.subscribe((status) => {
      //check validation state
      console.log(status); //VALID/INVALID
    });
  }

  onSubmitBasicForm() {
    if (this.basicForm.invalid) {
      return;
    }
    console.log(this.basicForm.value); //not include disable value
    console.log(this.basicForm.getRawValue()); //include all types of value
  }

  resetBasicForm(form: NgForm) {
    form.resetForm();
    //form.reset();
    //this.basicForm.reset();
  }

  onChkChange(event: MatCheckboxChange) {
    console.log(event.checked);
    if (event.checked) {
      this.basicForm.get("extra").enable();
      this.basicForm.get("extra").setValidators([Validators.required]);
    } else {
      this.basicForm.get("extra").disable();
      this.basicForm.get("extra").setValidators(null);
    }
    this.basicForm.get("extra").updateValueAndValidity();
  }

  setValueF1() {
    //Need to supply all the value
    this.basicForm.setValue(
      {
        name: "Aamir",
        description: "Dummy Text",
        gender: "Male",
        hobby: "Cricket",
        tc: true,
        extra: "Dummy",
        chkValidation:false
      }
      // ,
      // {
      //   onlySelf:true,
      //   emitEvent: true //value and status change event
      // }
    );

    //set single element control
    //this.basicForm.get('hobby').setValue('Football')
  }

  patchValueF1() {
    //set selected value
    this.basicForm.patchValue({
      name: "Tahir",
    });
  }

  get f1() {
    return this.basicForm.controls;
  }
}
