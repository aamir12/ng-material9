import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-grp-array',
  templateUrl: './frm-grp-array.component.html',
  styleUrls: ['./frm-grp-array.component.css']
})
export class FrmGrpArrayComponent implements OnInit {
  documentsFrm:FormGroup;
  @ViewChildren('inputFile') inputFile:QueryList<ElementRef>;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.documentsFrm = new FormGroup({
      docDocuments: new FormArray([this.docFormate()])
    });
  }

  docFormate(){
    return new FormGroup({
      docFile : new FormControl(null,[Validators.required]),
      docName: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required])
    });
  }

  add(){
    this.docDocumentArray.push(this.docFormate());
  }

  remove(i){
    this.docDocumentArray.removeAt(i);
  }

  get docDocumentArray(){
    return this.documentsFrm.get('docDocuments') as FormArray;
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

  onFormSubmit(){
    const formData: FormData = new FormData();
    let names = [];
    this.documentsFrm.value.docDocuments.forEach(doc=>{
      formData.append('documents', doc.docFile, doc.docName);
      //formData.append('name',doc.name);
      names.push(doc.name);
    });
    formData.append('names',JSON.stringify(names));
    this.http.post('http://192.168.1.61:5000/api/images/upload',formData).subscribe(res=>{
      console.log(res);
    })
  }

  // getValidity(i) {
  //   return (<FormArray>this.docForm.get('docDatas')).controls[i].invalid;
  // }
  
}

