import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from './models/book';
import { Employee } from './models/employee';
import { Person } from './models/person';

const PROFILES = [
  {id: 'dev', name: 'Developer'},
  {id: 'man', name: 'Manager'},
  {id: 'dir', name: 'Director'},
  {id: 'tst', name: 'Tester'}
];
const SKILLS = [
  {id: 'java', name: 'Java'},
  {id: 'angular', name: 'Angular'},
  {id: 'spring', name: 'Spring'},
  {id: 'hibernate', name: 'Hibernate'},
  {id: 'oracle', name: 'Oracle'}  
];

const ALL_BOOKS: Book[] = [
  { id: 101, name: 'Godaan', writer: 'Premchand' },
  { id: 102, name: 'Karmabhoomi', writer: 'Premchand' },
  { id: 103, name: 'Pinjar', writer: 'Amrita Pritam' }, 
  { id: 104, name: 'Kore Kagaz', writer: 'Amrita Pritam' },   
  { id: 105, name: 'Nirmala', writer: 'Premchand' },
  { id: 106, name: 'Seva Sadan', writer: 'Premchand' }           
];

@Injectable({
  providedIn: 'root'
})
export class MatInputsService {
  getProfiles() {
    return PROFILES;
  }
  getSkills() {
    return SKILLS;
  }
  saveEmployee(emp: Employee) {
     console.log(emp);  
  }

  getAllBooks() {
    return of(ALL_BOOKS);
  }
  saveBook(books) {
    console.log(JSON.stringify(books));
  }

  savePerson(person: Person) {
    console.log(person);  
 }
} 