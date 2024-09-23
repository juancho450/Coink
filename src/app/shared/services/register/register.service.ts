import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, debounceTime, delay, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from '../../interfaces/list';
import { ApiResponse } from '../../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient);
  
  public getGenderList() {
   return this.http.get<List[]>(`${environment.API_URL}/signup/genders`);
  }

  public getDocumentTypesList() {
    return this.http.get<List[]>(`${environment.API_URL}/signup/documentTypes`);
   }

   public getGenderListJSON() : Observable<List[]> {
    return this.http.get<ApiResponse<List[]>>(`assets/json/gender.json`).pipe(
      delay(1000),
      map((element) => element.data)
    );
   }

   public getDocumentTypesListJSON(): Observable<List[]> {
    return this.http.get<ApiResponse<List[]>>(`assets/json/document-types.json`).pipe(
      delay(1000),
      map((element) => element.data)
    );
   }
}
