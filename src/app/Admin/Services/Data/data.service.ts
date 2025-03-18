import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Create a BehaviorSubject with an initial value
  private loan = new BehaviorSubject<string>("");

  // Observable that components can subscribe to
  currentData$ = this.loan.asObservable();

  // Method to update the BehaviorSubject
  updateData(newData: string) {
    this.loan.next(newData);
  }
}
