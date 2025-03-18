import { Installments } from "../Installments/installments";
import { Loan } from "../Loan/loan";

export class Schedule {
    scheduleId?: string
    loan: Loan;
    schedule: Installments [] ;

    constructor(scheduleId:string ,loan: Loan, schedule: Installments[]) {
        this.loan = loan;
        this.schedule = schedule;
        this.scheduleId = scheduleId
    }
}
