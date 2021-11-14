import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { MatInputsService } from '../mat-input.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css']
})
export class SelectSearchComponent implements OnInit {
  allBooks$: Observable<Book[]>;
  filteredBooks$ : Observable<Book[]>;
  bookForm:FormGroup;
  @ViewChild('bookForm1',{static:false}) bookForm1 :NgForm;
  constructor(private matInputService:MatInputsService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
       book: new FormControl(null,[Validators.required])
    });
    this.allBooks$ = this.matInputService.getAllBooks();
    this.filteredBooks$ = this.book.valueChanges.pipe(
      startWith(''),
      switchMap(value => this.filteredBooks(value))
    );
  }

  private filteredBooks(value:string | Book){
    //console.log(value);
    let filterValue = '';
    if(value){
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
      return this.allBooks$.pipe(
        map(books => books.filter(book=> book.name.toLowerCase().includes(filterValue)))
      );
    }else{
      return this.allBooks$;
    }
  }

  private displayFn(book?: Book): string | undefined {
    return book ? book.name : undefined;
  }

  get book(){
    return this.bookForm.get('book');
  }

  onFormSubmit() {
    if(this.bookForm.invalid){
      return;
    }
    this.matInputService.saveBook(this.bookForm.value);
    this.resetForm();
  }

  resetForm() {
    this.bookForm1.resetForm();
  }

  setDefault(){
    this.book.setValue({ id: 102, name: 'Karmabhoomi', writer: 'Premchand' });
  }

  checkBookEmpty(){
    const value = this.book.value;
    if(value && !value.id){
      this.book.setValue(null);
    }
  }
}
