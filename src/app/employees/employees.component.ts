import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 
  constructor(public empService:EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(response=>{
        console.log(response);
    })
  }

}
