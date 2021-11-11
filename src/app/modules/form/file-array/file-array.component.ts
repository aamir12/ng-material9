import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-array',
  templateUrl: './file-array.component.html',
  styleUrls: ['./file-array.component.css']
})
export class FileArrayComponent implements OnInit {
  docForm:FormGroup;
  @ViewChildren('inputFile') inputFile:QueryList<ElementRef>
  constructor() { }

  ngOnInit() {
    this.docForm = new FormGroup({
      baseUrls : new FormArray(
        [new FormControl(null,[Validators.required])],
        [Validators.required, Validators.maxLength(5)]
      )
    })
  }

  add(){
    this.baseUrls.push(new FormControl(null,[Validators.required]))
  }

  remove(i){
    this.baseUrls.removeAt(i);
  }

  onFormSubmit(){

  }

  get baseUrls(){
    return this.docForm.get('baseUrls') as FormArray;
  }

  pick(i){
   const file = this.inputFile.filter((x,index)=> i === index)[0];
   file.nativeElement.click();
  }

  onSelectedFile(event: any, i: number) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.match(/image\/*/) == null) {
        //this.docForm.get('baseUrls').setValue(null);
        this.baseUrls.at(i).setValue(null);
        return;
      }

      console.log(file)
      this.baseUrls.at(i).setValue(file.name);
    }
  }
}
