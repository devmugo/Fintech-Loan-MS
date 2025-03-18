import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewCustomerComponent } from '../../viewCustomer/view-customer/view-customer.component';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Admin/Services/Post/post.service';
import { Customer } from 'src/app/Admin/Models/Customer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit{
  customer : Customer = new Customer("","","","","","","","");


  constructor(public dialogRef: MatDialogRef<ViewCustomerComponent> ,
       @Inject(MAT_DIALOG_DATA) public passedcustomer: any, private postservice : PostService,
       private router : Router,private snackBar: MatSnackBar ) {}


     ngOnInit(): void {
      this.customer = this.passedcustomer.customer
     }

  onsubmit(form :any ): void {
    this.postservice.updateCustomer(this.customer).subscribe();
    this.router.navigate(['/managecustomers']);
    this.dialogRef.close();

    this.snackBar.open('Customer Details Updated Successfully ', 'Close', {
      duration: 2000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top', 
      panelClass: ['custom-snackbar'],
    });


  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
