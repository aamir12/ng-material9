import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  basicForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.basicForm = this.fb.group({
      name: [
        null,
        {      
          validators:[Validators.required],
          //asyncValidators:[],
          //updateOn: 'change' | 'blur' | 'submit';
        }],
        description:[null,Validators.required],
        gender:[null,Validators.required],
        hobby:[null,Validators.required]
    })
   
  }

  onSubmitBasicForm(){
    if(this.basicForm.invalid){
      return;
    }
    console.log(this.basicForm.value)
  }

  resetBasicForm(form:FormGroupDirective){
    form.resetForm();
   
    //this.basicForm.reset();
  }

  get f1(){
    return this.basicForm.controls;
  }

}
