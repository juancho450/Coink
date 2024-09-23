import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonButton, IonInput]
})
export class NumberPadComponent  implements OnInit {
  @Output() sendPhoneNumber = new EventEmitter<string>();
  public phoneNumber: string = '';


  constructor() { }

  ngOnInit() {}


  handleAppendNumber(num: number) {
    if(this.phoneNumber.length >= 10) return;
    this.phoneNumber += num.toString();
  }

  handleDeleteNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  handleConfirmNumber() {
    this.sendPhoneNumber.emit(this.phoneNumber);
  }
}
