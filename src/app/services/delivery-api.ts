import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryApi {

  constructor(private http: HttpClient) {}


  createDelivery(payload: any): Observable<any> {
    return this.http
      .post<any>(`https://testologia.ru/delivery/create`, payload)    // post запрос отправляем на сздание доставки
      .pipe(
        catchError((err) =>
          of({ error: err?.error?.error ?? 'Ошибка при создании заявки' })
        )
      );
  };



  getDeliveryInfo(id: number): Observable<any> {        // get запррос на получени доставки по ее id
    return this.http
      .get<any>(`https://testologia.ru/delivery/info`, { params: { id } })
      .pipe(
        catchError((err) =>
          of({ error: err?.error?.error ?? 'Ошибка при получении статуса' })
        )
      );
  };
  
}
