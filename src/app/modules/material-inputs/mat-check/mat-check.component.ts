import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-mat-check',
  templateUrl: './mat-check.component.html',
  styleUrls: ['./mat-check.component.css']
})
export class MatCheckComponent implements OnInit {
  chkFrm:FormGroup;
  isChkChecked = true;
  isRippleDisabled = true;
  isDisabled = true;
  isChkIndeterminate = true; 
  isIndeterminate = false; 
  vns = false;
  svk = false;
  allChecked= false;
  constructor(){}
  ngOnInit() {
     this.chkFrm = new FormGroup({
       chk : new FormControl(null,[Validators.requiredTrue])
     })
  }
  
  onChkChange(ob: MatCheckboxChange) {
     if(ob.checked) {
       this.vns = true;
       this.svk = true;
     } else {
       this.vns = false;
       this.svk = false;       
       console.log("test")
     }
  }
  onChildChkChange(ob: MatCheckboxChange) {

    const every = [this.vns,this.svk].every(x=>x);
    const some = [this.vns,this.svk].some(x=>x);
    console.log(every);
    console.log(some);
    if(every){
      this.allChecked = true;
      this.isIndeterminate = false;
      return;
    }
    if(some){
      this.isIndeterminate = true;
      this.allChecked = false;
      return;
    }

    this.isIndeterminate = false;
    this.allChecked = false;

   
  }
  onIndeterminateChange(val: boolean) {
      console.log('isIndeterminate: ' + val);
  }
  onChange(ob: MatCheckboxChange) {
    console.log("checked: " + ob.checked);
  }

  
  onSubmit(){
      if(this.chkFrm.invalid){
        return;
      }
      console.log("submitted")
  }

  toggleValue(){
    const value = !this.chkFrm.get('chk').value;
    this.chkFrm.get('chk').setValue(value);
  }

  get f1() {
    return this.chkFrm.controls;
  }

}
