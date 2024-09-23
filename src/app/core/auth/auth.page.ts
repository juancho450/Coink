import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule ]
})
export class AuthPage implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  handleGoToRegister(){
    this.router.navigate(['/register/phone-number']);
  }

}
