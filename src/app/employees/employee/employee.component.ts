import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];
    
  form:FormGroup;
  mode = "add";
  employee:any;
  snackBarRef:MatSnackBarRef<SimpleSnackBar>;
  constructor(public empService:EmployeeService,private _snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.form =  new FormGroup({
      id: new FormControl(null),
      fullName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required,Validators.minLength(8)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(false)
    });

    this.snackBarRef = this._snackBar.open('Message archived', 'Undo', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass:["notification","success"]
    })

    this.snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

  
  
  

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  onClear(){
    this.form.reset();
  
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }
    let observable:Observable<any>;
    if(this.mode === "add"){
      observable = this.empService.addEmployee(this.form.value);
    }else{
      observable = this.empService.updateEmployee(this.form.value);
    }

    observable.subscribe(response => {
     console.log(response);
     this.onClear();
    });
    
  }

}
