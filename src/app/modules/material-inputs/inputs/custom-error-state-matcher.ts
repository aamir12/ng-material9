import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
   isErrorState(control:FormControl|null,form:FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return (control.invalid && (control.dirty || control.touched || isSubmitted));
   }
}