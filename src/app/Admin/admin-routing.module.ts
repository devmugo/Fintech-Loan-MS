import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageCustomersComponent } from "./component/manage-customers/manage-customers.component";
import { ApplyLoanComponent } from "./component/apply-loan/apply-loan.component";
import { ManageLoansComponent } from "./component/manage-loans/manage-loans.component";
import { PayloanComponent } from "./component/payloan/payloan.component";

const routes: Routes = [
  { path: 'managecustomers', component: ManageCustomersComponent },
  { path: '', component: ManageCustomersComponent },
  { path: 'applyloan', component: ApplyLoanComponent },
  { path: 'manageloans', component: ManageLoansComponent },
  { path: 'payloan', component: PayloanComponent },

    
    
   ];
   
   @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
   })
   export class AdminRoutingModule { }
   