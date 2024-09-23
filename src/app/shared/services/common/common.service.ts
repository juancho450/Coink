import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public setFieldErrorText(control:FormControl){
    if (control?.hasError('required') && control.touched) {
      return 'Campo requerido';
    }

    if (control?.hasError('minlength') && control.touched) {
      return `Mínimo ${control.errors!['minlength'].requiredLength} caracteres`;
    }

    if (control?.hasError('maxlength') && control.touched) {
      return `Máximo ${control.errors!['maxlength'].requiredLength} caracteres`;
    }

    if (control?.hasError('email') && control.touched) {
      return 'Correo inválido';
    }

    if (control?.hasError('pinNotMatch') && control.touched) {
      return 'Este campo no coincide con el pin';
    }

    if (control?.hasError('emailNotMatch') && control.touched) {
      return 'Este campo no coincide con el email';
    }


    return '';
  }

  public setEmailValidation(control: FormControl):  ValidationErrors | null  {
    if (control.value) {
      let value = control.value.toLowerCase();
      if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value,
        )
      ) {
        {
          return { email: true };
        }
      }
    }

    return null;
  }

  public setPinMatchValidation(control: FormControl): ValidationErrors | null {
      if (control.parent) {
        const pin = control.parent.get('pin');
        const confirmPin = control.parent.get('confirmPin');
  
        return pin!.value !== confirmPin!.value
          ? { pinNotMatch: true }
          : null;
      }

      return null;
  }

  public setEmailMatchValidation(control: FormControl): ValidationErrors | null {
    if (control.parent) {
      const email = control.parent.get('email');
      const confirmEmail = control.parent.get('confirmEmail');

      return email!.value !== confirmEmail!.value
        ? { emailNotMatch: true }
        : null;
    }

    return null;
}


}
