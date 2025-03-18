import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Admin/Models/Customer';
import { Installments } from 'src/app/Admin/Models/Installments/installments';
import { Loan } from 'src/app/Admin/Models/Loan/loan';
import { Schedule } from 'src/app/Admin/Models/Schedules/schedule';
import { PostService } from 'src/app/Admin/Services/Post/post.service';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {
  customer : Customer = new Customer("","","","","","","","");  
      loan : Loan = new Loan("",this.customer,"",0,0,0,"",);
      installments : Installments[] = []
      loanSchedules : Schedule  = new Schedule(" ",this.loan,this.installments);
      customerName : string = ""
      dateBorrowed : string = ""
      amountBorrowed : string = ""
      installmentspaid : string = ""
      interestRate : string = ""
      installmentAmount : string = ""
      duration : string = ""


  constructor(public dialogRef: MatDialogRef<ViewLoanComponent> ,
     @Inject(MAT_DIALOG_DATA) public passedLoan: any, private postservice : PostService,
     private router : Router
   ) {}



  ngOnInit(): void {
    this.loan = this.passedLoan.loan
    this.installments = this.passedLoan.loan.installments
    this.loanSchedules = this.passedLoan.loan.loanSchedules

    this.amountBorrowed = this.loan.amount.toString()
    this.customerName = this.loan.borrower.firstName + " " + this.loan.borrower.lastName
    this.dateBorrowed = this.loan.dateBorrowed
    this.interestRate = this.loan.interestRate.toString()    
    this.duration = this.loan.duration.toString()
  }

  closeModal(){
    this.dialogRef.close()
  }

}
