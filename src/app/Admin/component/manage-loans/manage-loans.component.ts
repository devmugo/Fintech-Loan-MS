import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/Post/post.service';
import { MatDialog } from '@angular/material/dialog';
import { GetService } from '../../Services/Get/get.service';
import { Loan } from '../../Models/Loan/loan';
import { DataService } from '../../Services/Data/data.service';
import { Router } from '@angular/router';
import { ViewLoanComponent } from '../../Modals/viewLoanModal/view-loan/view-loan.component';

@Component({
  selector: 'app-manage-loans',
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {
  loans : Loan[] = []

   constructor(private postservice: PostService , public dialog: MatDialog 
        , private getservice: GetService , private dataService : DataService,
      private router : Router)  {}

  ngOnInit(): void {
    this.loadLoans()
  }

  loadLoans ():void {
    this.getservice.getAllLoans().subscribe(
      (response) =>  {
        this.loans = response.reverse() 
            
      }     
    ); 
    
  }

  onclickPay(loan: Loan){
  
    this.dataService.updateData(loan.loanId)
    this.router.navigate(['/payloan']);
  }
  
  onclickView(loan: Loan){
    this.dialog.open(ViewLoanComponent,
      {
        disableClose: true,
        data: {loan: loan},
        position: {top: '5%'}
      }
      
    )
  }

}
