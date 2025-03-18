export class Installments {
    month_no : string
    payment: number;
    duedate : string;
    status: string ;

    constructor(
    month_no : string,
    payment: number,
    duedate : string,
    status: string ,
    ) {
        this.month_no = month_no;
        this.payment = payment;
        this.duedate = duedate;
        this.status = status
    }
}
