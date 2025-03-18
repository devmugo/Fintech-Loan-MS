import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { PostService } from '../../Services/Post/post.service';
import { MatDialog } from '@angular/material/dialog';
import { GetService } from '../../Services/Get/get.service';
import { EditCustomerComponent } from '../../Modals/editCustomer/edit-customer/edit-customer.component';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customer : Customer = new Customer("","","","","","","","");
  customers: Customer[] = [];

  constructor(private postservice: PostService , public dialog: MatDialog 
    , private getservice: GetService )  {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  onsubmit(form :any ): void {        
     this.postservice.addCustomer(this.customer).subscribe();   
     window.location.href = '/managecustomers';  


  }
  loadCustomers ():void {
    this.getservice.getAllCustomers().subscribe(
      (response) =>  {
        this.customers = response      
      }     
    ); 
  }

  deleteCustomer( customer : Customer): void {
     
  }

  editCustomer(customer : Customer ): void {
      this.dialog.open(EditCustomerComponent,
          {
            disableClose: true,
            data: {customer: customer},
            position: {top: '5%'}
          }
          
        )
    
  }


}
