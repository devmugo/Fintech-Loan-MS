export class Customer {
nationalId : string
firstName : string  
lastName : string 
email : string
phone : string
dateOfRegistration : string
customerType : string
residence : string


constructor(nationalId:string ,firstName: string, lastName: string, email: string, phone: string,
     dateOfRegistration: string, customerType: string, residence: string  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email; 
    this.phone = phone;
    this.dateOfRegistration = dateOfRegistration;
    this.customerType = customerType;
    this.residence = residence;
    this.nationalId = nationalId;
   
}
}