import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material';
import { MatInputsService } from '../mat-input.service';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  personForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
  private personService: MatInputsService) {} 
  ngOnInit() {
     //Create a form
    this.personForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      activateAcc: new FormControl(false,[Validators.required]),
      premiumUser: new FormControl(false),
      autoRenewSub: new FormControl(true)
    });
  } 
  autoRenew = new FormControl();  
  onChange(ob: MatSlideToggleChange) {
    console.log(ob.checked);
    let matSlideToggle: MatSlideToggle = ob.source;
    console.log(matSlideToggle.color);
    console.log(matSlideToggle.required);
    console.log(this.autoRenew.value);
  }
  enable = new FormControl();
  onDragChange() {
  console.log(this.enable.value);
  }  
  activate = new FormControl();
  onToggleChange() {
  console.log(this.activate.value);
  } 

  @ViewChild('slide',{static:false})
  matSlideToggle: MatSlideToggle;

  focusTest() {
  this.matSlideToggle.focus();
  }
  toggleTest() {
  this.matSlideToggle.toggle();
  }

 
  get username() {
  return this.personForm.get('username');
  }  
  get activateAcc() {
  return this.personForm.get('activateAcc');
  }  
  onFormSubmit() {
    if(this.personForm.invalid){
      return;
    }
    this.personService.savePerson(this.personForm.value);
  }  

}
