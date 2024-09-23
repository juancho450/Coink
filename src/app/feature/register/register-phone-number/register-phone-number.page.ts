import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NumberPadComponent } from 'src/app/shared/components/number-pad/number-pad.component';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-phone-number.page.html',
  styleUrls: ['./register-phone-number.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, NumberPadComponent, IonicModule]
})
export class RegisterPage implements OnInit {

  private router = inject(Router);
  private dataService = inject(DataService);
  constructor() { }

  ngOnInit() {
  }

  handlePhoneNumber(phoneNumber: string) {
    this.dataService.setPhoneNumber(phoneNumber);
    this.router.navigate(['/register/account']);
  }

}
