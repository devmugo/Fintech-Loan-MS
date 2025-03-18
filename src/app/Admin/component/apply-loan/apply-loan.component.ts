import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { GetService } from '../../Services/Get/get.service';
import { PostService } from '../../Services/Post/post.service';
import { MatDialog } from '@angular/material/dialog';
import { Loan } from '../../Models/Loan/loan';
import { Schedule } from '../../Models/Schedules/schedule';
import { Installments } from '../../Models/Installments/installments';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  customers : Customer [] = []
  customer : Customer = new Customer("","","","","","","","");
  loan : Loan = new Loan ("",this.customer," ",0, 0, 0,"")
  schedule : Schedule = new Schedule("",this.loan,[]) 
  message: string =""
  installments : Installments[] = []
  instalmentDate : string = ""
  

  constructor(private postservice: PostService , public dialog: MatDialog 
      , private getservice: GetService, private snackBar: MatSnackBar)  {}

  ngOnInit(): void {
    this.loadCustomers()

  } 

  loadCustomers ():void {
    this.getservice.getAllCustomers().subscribe(
      (response) =>  {
        this.customers = response      
      }     
    ); 
    
  }

  onsubmit( form : any){
    console.log("Loan before modification:", this.loan.borrower);

    this.loan.status = "Pending"
    this.loan.loanId = this.generateLoanId()
    this.schedule.schedule = this.generatePaymentSchedule(this.loan)
    this.schedule.loan = this.loan
    this.schedule.scheduleId = this.generateLoanId()  
    console.log("Loan after modification:", this.loan); 
    this.postservice.addLoan(this.loan).subscribe()
    this.postservice.addScedule(this.schedule).subscribe(
      (response) =>  {        
        this.snackBar.open('Loan Details Added Successfully', 'Close', {
          duration: 2000, // Auto close after 3 seconds
          horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
          verticalPosition: 'top', // 'top' | 'bottom'
          panelClass: ['custom-snackbar'], // Custom styling
        }); 
        this.loan = new Loan ("",this.customer," ",0, 0, 0,"")

               
      }     
    ); 
   

    


  }

  generatePaymentSchedule(loan: Loan): any[] {    
    const amountpayable = loan.amount * ( 1+loan.interestRate/100)
    const monthlypayment = amountpayable / loan.duration
    this.instalmentDate = loan.dateBorrowed
    

    for (let i = 0; i < loan.duration; i++) {      
      this.installments.push(new Installments(String(i+1),Math.ceil(monthlypayment),this.instalmentDate ,"pending"))
      this.instalmentDate = this.getDateAfterDays(this.instalmentDate,30)
    }
    return this.installments   

}

generateLoanId(): string {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(now.getDate()).padStart(2, '0');
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
Display(event: any):void {
  this.loan.borrower = this.customers.find(customer => customer.nationalId === event.target.value) || new Customer("","","","","","","","");
  this.snackBar.open('Customer Selected Successfully', 'Close', {
    duration: 1000, // Auto close after 3 seconds
    horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
    verticalPosition: 'top', // 'top' | 'bottom'
    panelClass: ['custom-snackbar'], // Custom styling
  });
 
}

getDateAfterDays(startDate: string, daysToAdd: number): string {
  const date = new Date(startDate);
  date.setDate(date.getDate() + daysToAdd);

  // Format the date as YYYY-MM-DD
  return date.toISOString().split('T')[0];
}
}
