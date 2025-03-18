import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './Admin/admin.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const dbConfig: DBConfig = {
  name: 'LocalDB',
  version: 6,
  objectStoresMeta: [
    // Table: Customers
    {
      store: 'customers',
      storeConfig: { keyPath: 'nationalId', autoIncrement: false },
      storeSchema: [
        { name: 'firstName', keypath: 'firstName', options: { unique: false } },
        { name: 'lastName', keypath: 'lastName', options: { unique: false } },
        { name: 'customerType', keypath: 'customerType', options: { unique: false } },
        { name: 'dateOfRegistration', keypath: 'dateOfRegistration', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: true } },
        { name: 'phone', keypath: 'phone', options: { unique: false } },
        { name: 'residence', keypath: 'residence', options: { unique: false } },
        

        
      ]
    }  , 


    {
      store: 'loans',
      storeConfig: { keyPath: 'loanId', autoIncrement: false },
      storeSchema: [
        { name: 'borrower', keypath: 'borrower', options: { unique: false } },
        { name: 'dateBorrowed', keypath: 'dateBorrowed', options: { unique: false } },
        { name: 'amount', keypath: 'amount', options: { unique: false } },
        { name: 'interestRate', keypath: 'interestRate', options: { unique: false } },
        { name: 'duration', keypath: 'duration', options: { unique: true } },
        { name: 'status', keypath: 'status', options: { unique: false } },      
        

        
      ]
    },

    {
      store: 'loanSchedules',
      storeConfig: { keyPath: 'scheduleId', autoIncrement: false },
      storeSchema: [
        { name: 'loan', keypath: 'loan', options: { unique: true } },
        { name: 'schedule', keypath: 'schedule', options: { unique: false } },
            
        

        
      ]
    }
  


  ]
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,MatDialogModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
