import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatInputsService } from '../mat-input.service';

import { Profile } from '../models/profile';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  empForm :FormGroup;
  allProfiles: Array<Profile>;
  allSkills: Array<Skill>;
  @ViewChild('empForm1',{static:false}) empForm1:NgForm;

  constructor(private matInputService:MatInputsService) { }
  
  ngOnInit() {
    this.empForm =new FormGroup({
      name:  new FormControl('', [Validators.required]),
      profile:  new FormControl('', [Validators.required]),
      skills:  new FormControl('', [Validators.required])
    });
    
    this.allProfiles = this.matInputService.getProfiles();
    this.allSkills = this.matInputService.getSkills();
  }

  get name() {
    return this.empForm.get('name');
  }
  get profile() {
    return this.empForm.get('profile');
  }
  get skills() {
    return this.empForm.get('skills');
  }

  onFormSubmit(){
    if(this.empForm.invalid){
      return 
    }
    this.matInputService.saveEmployee(this.empForm.value);
    this.resetForm();
  }
  setDefault() {
    // let employee = {
    //   name: 'Amit Singh',
    //   profile: this.allProfiles[2],
    //   skills: [this.allSkills[1], this.allSkills[2]]
    // };

    let employee = {
      name: 'Amit Singh',
      profile: this.allProfiles[2].id,
      skills: [this.allSkills[1].id, this.allSkills[2].id]
    };
    this.empForm.setValue(employee);
  }
  resetForm() {
    this.empForm.reset();
    this.empForm1.resetForm();
  }


}
