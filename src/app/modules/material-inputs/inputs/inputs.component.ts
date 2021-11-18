import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  amount = new FormControl();
  commentFC = new FormControl();
  myCity = new FormControl('', Validators.required); 
  amountInp = new FormControl('', Validators.required); 
  amountInp1 = new FormControl('', Validators.required); 
  commentFCInp = new FormControl('', [Validators.required,Validators.maxLength(30)]); 
  commentFCInp1 = new FormControl('', [Validators.required,Validators.maxLength(30)]); 
  esMatcher = new CustomErrorStateMatcher(); 
  descFC = new FormControl('', [
    Validators.required
  ]);
  @ViewChild('autosize',{static:false}) 
  txtAreaAutosize: CdkTextareaAutosize;
  contentFCInp2 = new FormControl();

  @ViewChild('cfcAutosize',{static:false}) 
  contentFCAutosize: CdkTextareaAutosize;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  onAmountChange() {
    console.log(this.amount.value);
  } 

  onCommentChange() {
    console.log(this.commentFC.value);
  } 

  
    
  onDescChange() {
    console.log("enabled: "+ this.txtAreaAutosize.enabled);
    console.log("minRows: "+ this.txtAreaAutosize.minRows);
    console.log("maxRows: "+ this.txtAreaAutosize.maxRows);
    console.log("Description: "+ this.descFC.value);
  } 

  resetTextAreaSize() {
    this.ngZone.onStable.pipe(take(1))
    .subscribe(() => this.contentFCAutosize.resizeToFitContent(true));
  }

  resizeTextArea() {
    this.contentFCAutosize.reset();
  }

}
