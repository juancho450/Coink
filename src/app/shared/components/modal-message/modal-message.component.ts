import { Component, Input, OnInit, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalMessageComponent  implements OnInit {

  @Input() title: string;
  @Input() labelButton: string;
  @Input() message: string;
  @Input() image: string;

  private modalController = inject(ModalController);

  constructor() { }

  ngOnInit() {}

  handleClickEventModal(){
    this.modalController.dismiss();
  }

}
