import { Employee }  from './Employee';

export class Manager extends Employee {
    private officeNumber: number;

    constructor( name: string, id: number, email: string, officeNumber: number ) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() :string {
        return 'Engineer';
    }

    getOfficeNumber() :number {
        return this.officeNumber;
    }
}