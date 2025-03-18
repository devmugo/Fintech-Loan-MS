import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data/data.service';
import { Schedule } from '../../Models/Schedules/schedule';
import { Loan } from '../../Models/Loan/loan';
import { Customer } from '../../Models/Customer';
import { GetService } from '../../Services/Get/get.service';
import { Installments } from '../../Models/Installments/installments';
import { MatDialog } from '@angular/material/dialog';
import { PayModalComponent } from '../../Modals/Pay/pay-modal/pay-modal.component';



@Component({
  selector: 'app-payloan',
  templateUrl: './payloan.component.html',
  styleUrls: ['./payloan.component.css']
})


export class PayloanComponent implements OnInit {



  constructor(private dataService : DataService,private getservice : GetService , 
    public dialog: MatDialog ) { }
  loanId:string  =  " ";
  customer : Customer = new Customer("","","","","","","","");  
  loan : Loan = new Loan("",this.customer,"",0,0,0,"",);
  installments : Installments[] = []
  loanSchedules : Schedule  = new Schedule(" ",this.loan,this.installments);
 
  



  ngOnInit(): void {
    this.dataService.currentData$.subscribe(value => {
      this.loanId = value;     
      this.getservice.getLoanSchedulesByLoanId(this.loanId).subscribe(value => {
        this.loanSchedules = value; 
        console.log(this.loanSchedules)
        this.installments = this.loanSchedules.schedule       
  
  
      });


    });

  } 

  payModal(index : number){
    this.dialog.open(PayModalComponent, {
      disableClose: true, 
      width: '500px',      
      data: { schedule: this.loanSchedules,
              index : index
      },
      position: { top: '5%', left: '30%' }
    });
    
  }

}
