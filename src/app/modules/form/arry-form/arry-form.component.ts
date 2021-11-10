import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-arry-form",
  templateUrl: "./arry-form.component.html",
  styleUrls: ["./arry-form.component.css"],
})
export class ArryFormComponent implements OnInit {
  teamForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.teamForm = new FormGroup({
      teamName: new FormControl(null, [Validators.required]),
      employees: new FormArray(
        [new FormControl()],
        [Validators.required, Validators.maxLength(5)]
      ),
    });
  }

  get teamName() {
    return this.teamForm.get("teamName") as FormControl;
  }
  get employees() {
    return this.teamForm.get("employees") as FormArray;
  }

  addEmployeeControl() {
    this.employees.push(new FormControl()); //Inserts the new control at the end of the array.
  }
  deleteEmployeeControl(index: number) {
    this.employees.removeAt(index); //Removes the control at the given index in the array.
  }
  insertEmployeeControl() {
    this.employees.insert(1, new FormControl()); //a new control is added at index 1 and existing one at that index is pushed to the next index.
  }
  setEmployeeControl() {
    this.employees.setControl(2, new FormControl("Shiv"));
    //a new control is set at index 2 replacing the existing one.
  }
  setEmployeeValue() {
    this.clearEmployeeControls();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.addEmployeeControl();
    this.employees.setValue(["Mahesh", "Vishal", "Krishn"]);
    //The above code will work for FormArray of size 3. The value will be set to all the three controls. If the array size of FormArray is not 3, the setValue will throw error.
  }
  patchEmployeeValue() {
    this.employees.patchValue(["Mahesh", "Vishal", "Krishn"]);
    //In the above code, the value will be set to first 3 controls. If the array size of FormArray is not 3, the patchValue will not throw error.
  }
  resetEmployees() {
    this.employees.reset();
    //Resets the values of all controls of the array.
  }
  clearEmployeeControls() {
    this.employees.clear();
    //Removes all controls in the array.
  }
  onFormSubmit() {
    const emp = this.employees.at(0); //Returns the control instance for the given index.
    console.log(emp.value);
    const rawVal = this.employees.getRawValue(); //The aggregate value of the array. we mostly use this.employees.value
    const value = this.employees.value;
    console.log(value);
    console.log(rawVal);
    this.teamForm.reset();
  }

  // ngOnInit() {
  //   this.empForm = this.fb.group({
  //     fname: [null, Validators.required],
  //     lname: [null, Validators.required],
  //     email: [null, [Validators.required, Validators.email]],
  //     mobile: [null, Validators.required],
  //     //items: [null],
  //     addressDetails: this.fb.array([this.addAddressGroup()]),
  //   });
  //   this.route.params.subscribe((params: Params) => {
  //     if (params['id']) {
  //       this.editMode = true;
  //       this.id = +params['id'];
  //       this.loader = true;
  //       this.initForm();
  //     }
  //   });
  // }

  /*
    this.fb.control(false);
     this.fb.array(arr);
     this.fb.group({})
  */

  // initForm() {
  //   this.fetchSub = this.cs.getEmp(this.id).subscribe(
  //     (res) => {
  //       const empData = res.data;
  //       let addressDetailsArr = new FormArray([]);
  //       if (empData.addressDetails) {
  //         for (let addressD of empData.addressDetails) {
  //           addressDetailsArr.push(
  //             new FormGroup({
  //               address: new FormControl(addressD.address, Validators.required),
  //               city: new FormControl(addressD.city, Validators.required),
  //               state: new FormControl(addressD.state, Validators.required),
  //             })
  //           );
  //         }
  //       } else {
  //         addressDetailsArr = new FormArray([this.addAddressGroup()]);
  //       }

  //       // const itemData = ['javascript', 'nodejs'];

  //       this.empForm = this.fb.group({
  //         fname: [empData.fname, Validators.required],
  //         lname: [empData.lname, Validators.required],
  //         email: [empData.email, [Validators.required, Validators.email]],
  //         mobile: [empData.mobile, Validators.required],
  //         addressDetails: addressDetailsArr,
  //         //items: [itemData],
  //       });

  //       this.loader = false;
  //     },
  //     (error) => {
  //       this.router.navigate(['/crud']);
  //     }
  //   );
  // }

  // addAddressGroup() {
  //   return this.fb.group({
  //     address: [null, Validators.required],
  //     city: [null, Validators.required],
  //     state: [null, Validators.required],
  //   });
  // }

  // addAddress() {
  //   this.addressArray.push(this.addAddressGroup());
  // }
  // removeAddress(index) {
  //   this.addressArray.removeAt(index);
  // }

  // get addressArray() {
  //   return <FormArray>this.empForm.get('addressDetails');
  // }
}
