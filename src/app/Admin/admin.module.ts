import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { ManageCustomersComponent } from './component/manage-customers/manage-customers.component';
import { ApplyLoanComponent } from './component/apply-loan/apply-loan.component';
import { ManageLoansComponent } from './component/manage-loans/manage-loans.component';
import { PayloanComponent } from './component/payloan/payloan.component';
import { PayModalComponent } from './Modals/Pay/pay-modal/pay-modal.component';
import { ViewLoanComponent } from './Modals/viewLoanModal/view-loan/view-loan.component';
import { EditCustomerComponent } from './Modals/editCustomer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './Modals/viewCustomer/view-customer/view-customer.component';






@NgModule({
    declarations: [  
    ManageCustomersComponent, ApplyLoanComponent, ManageLoansComponent, PayloanComponent, PayModalComponent, ViewLoanComponent, EditCustomerComponent, ViewCustomerComponent
  ], 
    
    imports: [
      CommonModule,AdminRoutingModule,FormsModule
    ]
  })
  export class AdminModule { }