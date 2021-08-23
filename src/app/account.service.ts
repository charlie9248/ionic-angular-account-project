import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';


const httpHeaders = {
  headers : new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'Application/JSON',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // eslint-disable-next-line max-len

  getAccount(): Observable<any[]>{
    // eslint-disable-next-line max-len
    return this.http.get<any[]>('http://us-central1-momentumtest-bfdef.cloudfunctions.net/app/api/v1/account/findByUserId?userId=UZyMgwSApiN0b148VDrZSAeWkfb2');
  }

  getSingleAccount(id): Observable<any>{
    return this.http.get<any>(`https://us-central1-momentumtest-bfdef.cloudfunctions.net/app/api/v1/account/${id}`);
  }

  addUserAccount(): Observable<any> {
    // eslint-disable-next-line max-len
    return this.http.put<any>(`https://us-central1-momentumtest-bfdef.cloudfunctions.net/app/api/v1/account/create?userId=UZyMgwSApiN0b148VDrZSAeWkfb2`,{
      name: 'Acc No',
      accountNumber: '3425635',
      balance: 0.0,
      overdraft : 0.0,
    },httpHeaders);
  }

  depositToAccount(id: string ,amount: number): Observable<any>{
    // eslint-disable-next-line max-len
    return this.http.post<any>(`https://us-central1-momentumtest-bfdef.cloudfunctions.net/app/api/v1/account/deposit/${id}?amount=${amount}`,{
      balance : amount
    } ,httpHeaders);
  }

  withdraFromAccount(id: string ,amount: number): Observable<any>{
    // eslint-disable-next-line max-len
    return this.http.post<any>(`https://us-central1-momentumtest-bfdef.cloudfunctions.net/app/api/v1/account/withdraw/${id}?amount=${amount}`,{
      balance : amount
    },httpHeaders);
  }

}

