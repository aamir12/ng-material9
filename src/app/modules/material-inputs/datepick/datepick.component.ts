import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-datepick',
  templateUrl: './datepick.component.html',
  styleUrls: ['./datepick.component.css']
})
export class DatepickComponent implements OnInit {
  dateOfBirth = new FormControl(); 
  constructor(private dateAdapter: DateAdapter<any>) { }

  ngOnInit() {
  }

  setDOB(){
    //valid format 
    //2021-11-17  ---yyyy-mm-dd
    //11-17-2021  ---mm-dd-yyyy 
    //2021/11/17  ---yyyy/mm/dd
    //11/17/2021  ---mm/dd/yyyy 

    const dob = new Date('2021/11/17');
    this.dateOfBirth.setValue(dob);
  }

  frenchLocale() {
    this.dateAdapter.setLocale('fr-FR');
  }
  engLocale() {
    this.dateAdapter.setLocale('en-US');
  }  
  hindiLocale() {
    this.dateAdapter.setLocale('hi-IN');
  }   

}
