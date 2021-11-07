import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService {
  url: string = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<any>(`${this.url}/employees`);
  }

  addEmployee(employee) {
    return this.http.post<any>(`${this.url}/employees`, { ...employee });
  }

  updateEmployee(employee) {
    return this.http.patch<any>(`${this.url}/employees`, { ...employee });
  }

  deleteEmployee(empId) {
    return this.http.delete<any>(`${this.url}/employees/${empId}`);
  }

  getEmployee(empId) {
    return this.http.get<any>(`${this.url}/employees/${empId}`);
  }
}
