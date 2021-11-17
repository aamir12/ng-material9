import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  form:FormGroup;
  dialogData: any;
  @ViewChildren('inputFile') inputFile:QueryList<ElementRef>;
  @ViewChild('scrollDiv',{static:true}) scrollDiv:ElementRef;
  constructor(
    private router: Router,
    private _vps: ViewportScroller,
    private dialogRef: MatDialogRef<SimpleModalComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.dialogData = data;
      console.log(data);
    }

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl(this.dialogData.description),
      docDocuments: new FormArray([this.docFormate()])
    })
  }

  docFormate(){
    return new FormGroup({
      docFile : new FormControl(null),
      docName: new FormControl(null),
      name: new FormControl(null)
    });
  }

  add(){
    this.docDocumentArray.push(this.docFormate());
    // const height = this.scrollDiv.nativeElement.scrollHeight; 
    // console.log(height);
    // //this.scrollDiv.nativeElement.scoll
    // this.scrollDiv.nativeElement.scrollBottom = -1;
    const index = this.docDocumentArray.length - 1;
    //const id = `newDiv${index}`;
    // document.getElementById(id).scrollIntoView();
    //this._vps.scrollToAnchor(id)
    //this.router.navigate([], { fragment: id });
  }

  remove(i){
    this.docDocumentArray.removeAt(i);
  }

  get docDocumentArray(){
    return this.form.get('docDocuments') as FormArray;
  }

  pick(i){
   const file = this.inputFile.filter((x,index)=> i === index)[0];
   file.nativeElement.click();
  }

  onSelectedFile(event: any, i: number) {
    if(event.target.files.length === 0){
      return;
    }

    const file = event.target.files[0];
    if (file.type.match(/image\/*/) == null) {
      //this.docForm.get('baseUrls').setValue(null);
      this.docDocumentArray.controls[i].get('docFile').setValue(null);
      this.docDocumentArray.controls[i].get('docName').setValue(null);
      return;
    }

    this.docDocumentArray.controls[i].get('docFile').setValue(file);
    this.docDocumentArray.controls[i].get('docName').setValue(file.name);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
