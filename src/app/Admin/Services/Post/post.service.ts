import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Customer } from '../../Models/Customer';
import { Observable } from 'rxjs';
import { Loan } from '../../Models/Loan/loan';
import { Schedule } from '../../Models/Schedules/schedule';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  constructor(private dbService: NgxIndexedDBService) {}

  addCustomer(customer: Customer): Observable<any> {    
    return this.dbService.add('customers', customer);
  }

  addLoan(loan: Loan): Observable<any> {    
    return this.dbService.add('loans', loan);
  }

  addScedule(schedule: Schedule): Observable<any> {    
    return this.dbService.add('loanSchedules', schedule);
  }

  updatePayment(schedule: Schedule): Observable<any> {    
    return this.dbService.update('loanSchedules', schedule);
  }

  updateCustomer(customer: Customer): Observable<any> {    
    return this.dbService.update('customers', customer);
  }
  
}
