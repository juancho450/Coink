import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/services/register/register.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { List } from 'src/app/shared/interfaces/list';
import { IonicModule } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, forkJoin } from 'rxjs';
import {
  MaskitoElementPredicate,
  MaskitoMask,
  MaskitoOptions,
} from '@maskito/core';
import { MaskitoDirective } from '@maskito/angular'
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data/data.service';
import { maskitoDateOptionsGenerator } from '@maskito/kit';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.page.html',
  styleUrls: ['./register-account.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, MaskitoDirective]
})
export class RegisterAccountPage implements OnInit {

  public registerAccountFormGroup: FormGroup;
  public genderList: List[];
  public documentTypeList: List[];
  public numberMask: MaskitoOptions;
  public dateMastk: MaskitoOptions;

  public commonService = inject(CommonService);
  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterService);
  private ngxSpinnerService = inject(NgxSpinnerService);
  private dataService = inject(DataService);
  private router = inject(Router);
 
  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();


  constructor() {
    this.numberMask = {
      mask:  /^\$?\d*$/
    };

    this.dateMastk = maskitoDateOptionsGenerator({mode: 'dd/mm/yyyy', separator: '/'})

   }

  ngOnInit() {
    this.createForm();
    this.getLists();
  }

  public getLists() {
    this.ngxSpinnerService.show();

    forkJoin({
      genders: this.registerService.getGenderListJSON(),
      documentTypes: this.registerService.getDocumentTypesListJSON()
    }).pipe(
      finalize(() => {
        this.ngxSpinnerService.hide();
      })
    )
      .subscribe({
        next: (response) => {
          this.genderList = response.genders;
          this.documentTypeList = response.documentTypes;
        }
      });
  }


  public handleFormControlError(name: string) {
    const control = this.registerAccountFormGroup.controls[name] as FormControl;
    return this.commonService.setFieldErrorText(control);
  }

  public handleNext() {
    if(this.registerAccountFormGroup.invalid){
      return;
    }
    
    this.dataService.setRegisterData(this.registerAccountFormGroup.getRawValue());
    this.router.navigate(['/register/finalize']);
  }


  private createForm() {
    this.registerAccountFormGroup = this.formBuilder.group({
      documentType: [null, Validators.required],
      documentNumber: [null, [Validators.required, Validators.maxLength(10)]],
      expeditionDate: [null, Validators.required],
      birthDate: [null, Validators.required],
      gender: [null, Validators.required],
      email: [null, [Validators.required, this.commonService.setEmailValidation.bind(this)]],
      confirmEmail: [null, [Validators.required, this.commonService.setEmailValidation.bind(this), this.commonService.setEmailMatchValidation.bind(this)]],
      pin: [null, [Validators.required, Validators.maxLength(4)]],
      confirmPin: [null, [Validators.required, this.commonService.setPinMatchValidation.bind(this), Validators.maxLength(4)]],
    })
  }
}
