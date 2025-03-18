import { Customer } from "../Customer";

export class Loan {
    loanId: string;
    borrower: Customer;
    dateBorrowed: string;
    amount: number;
    interestRate: number;
    duration: number;
    status: string;

    constructor(
        loanId: string,
        borrower: Customer,
        dateBorrowed: string,
        amount: number,
        interestRate: number,
        duration: number,
        status: string
    ) {
        this.loanId = loanId;
        this.borrower = borrower;
        this.dateBorrowed = dateBorrowed;
        this.amount = amount;
        this.interestRate = interestRate;
        this.duration = duration;
        this.status = status;
    }
}
