import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomeDateValidators {
  static expiryDateValidation(): ValidatorFn {
    return (group: FormGroup): ValidationErrors => {
      const expiryMonth = group.controls["expiryMonth"];
      const expiryYear = group.controls["expiryYear"];

      const selectedMonth = +expiryMonth.value;
      const selectedYear = expiryYear.value + "";
      console.log(selectedMonth);
      console.log(selectedYear);

      if (!expiryMonth || !expiryYear) {
        return null;
      }

      if (expiryYear.errors && !expiryYear.errors.invalid_data) {
        return null;
      }

      const theDate: Date = new Date();
      const curMonth: number = theDate.getMonth();
      const curYear: number = theDate.getFullYear();
      let year = +("20" + selectedYear);

      const expiry = new Date(year, selectedMonth);
      const current = new Date();

      return expiry.getTime() > current.getTime()
        ? null
        : { invalid_data: true };

      //   if (selectedMonth <= curMonth && curYear >= selectedYear) {
      //     console.log("Error");
      //     return { invalid_data: true };
      //     //expiryYear.setErrors({ invalid_data: true });
      //   } else {
      //     //expiryYear.setErrors(null);
      //     return null;
      //   }
    };
  }
}
