import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Customer } from '../../Models/Customer';
import { Observable } from 'rxjs';
import { Loan } from '../../Models/Loan/loan';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private dbService: NgxIndexedDBService) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.dbService.getAll('customers');
  }

  getAllLoans(): Observable<Loan[]> {
    return this.dbService.getAll('loans');
  }
  getLoanSchedulesByLoanId(loanId: string): Observable<any> {
    return this.dbService.getByKey('loanSchedules',  loanId);
  }
  
}
