import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  private data = new BehaviorSubject<any>({
    phoneNumber: '',
    register: {}
  });
  public data$ = this.data.asObservable();

  constructor() { }

    setPhoneNumber(phoneNumber: string) {
      const currentData = this.data.value;
      this.data.next({ ...currentData, phoneNumber });
    }
  
    setRegisterData(data: any) {
      const currentData = this.data.value;
      this.data.next({ ...currentData, register: data });
    }
  
    getData() {
      return this.data.value;
    }
}
