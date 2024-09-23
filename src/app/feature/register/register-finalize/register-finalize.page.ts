import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { ModalMessageComponent } from 'src/app/shared/components/modal-message/modal-message.component';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-register-finalize',
  templateUrl: './register-finalize.page.html',
  styleUrls: ['./register-finalize.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterFinalizePage implements OnInit {

  public readContractControl =  new FormControl(false, Validators.required);
  private modalController = inject(ModalController);
  private router = inject(Router);
  private dataService = inject(DataService)

  constructor() { }

  ngOnInit() {
  }

  handleReadContract() {
    Browser.open({ url: 'https://coink.com/' });
  }

  handleAccept() {
    this.handleOpenModalMessage();
  }

  async handleOpenModalMessage() {
    const modal = await this.modalController.create({
      component: ModalMessageComponent,
      backdropDismiss: false,
      componentProps: {
        title: '¡Bienvenido a Coink!',
        message: '¡Cuenta creada exitosamente, tu marrano ya está listo para que empieces a ahorrar!',
        labelButton: 'CONTINUAR',
        image: 'assets/icon/pig-gift.svg',
      },
      cssClass: 'modal--modifier',
    });
    modal.present();

   await modal.onWillDismiss();
   console.log(this.dataService.getData());
   this.router.navigate(['/auth']);

  }

}
