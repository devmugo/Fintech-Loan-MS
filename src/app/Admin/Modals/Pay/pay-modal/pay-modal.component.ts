import { Component ,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Admin/Models/Customer';
import { Installments } from 'src/app/Admin/Models/Installments/installments';
import { Loan } from 'src/app/Admin/Models/Loan/loan';
import { Schedule } from 'src/app/Admin/Models/Schedules/schedule';
import { PostService } from 'src/app/Admin/Services/Post/post.service';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.css']
})
export class PayModalComponent implements OnInit {
  customer : Customer = new Customer("","","","","","","","");  
    loan : Loan = new Loan("",this.customer,"",0,0,0,"",);
    installments : Installments[] = []
    loanSchedules : Schedule  = new Schedule(" ",this.loan,this.installments);
    borrower : string = ""
    loanId : string = ""
    amountPaid : number  = 0
    amountDue : number = 0
    instalmentNo : number = 0

  constructor(public dialogRef: MatDialogRef<PayModalComponent> ,
    @Inject(MAT_DIALOG_DATA) public passedcustomer: any, private postservice : PostService,
    private router : Router
  ) {}


  ngOnInit(): void {
    this.loanSchedules = this.passedcustomer.schedule 
    this.borrower = this.loanSchedules.loan.borrower.firstName + " " +
     this.loanSchedules.loan.borrower.lastName
     this.loanId = this.loanSchedules.scheduleId || ""
     this.instalmentNo = Number(this.passedcustomer.index)+1 
     this.amountDue = this.loanSchedules.schedule[this.passedcustomer.index].payment    
  }

  payLoan(){
    if (this.amountDue == this.amountPaid){
      this.loanSchedules.schedule[this.passedcustomer.index].status = "paid"
      this.loanSchedules.schedule[this.passedcustomer.index].payment = 0
      console.log(this.loanSchedules)
     
    }
    else if (this.amountDue > this.amountPaid){
      this.loanSchedules.schedule[this.passedcustomer.index].payment = this.amountDue-this.amountPaid
      
    }
    else {
      this.loanSchedules.schedule[this.passedcustomer.index].status = "paid"
    }
    this.postservice.updatePayment(this.loanSchedules).subscribe()
    this.dialogRef.close();
    this.router.navigate(['/payloan']);

   
    
  }

  closeModal(){
    this.dialogRef.close();
  }

}
