export class Employee {
    protected name: string;
    protected id: number;
    protected email: string;


    constructor( name: string, id: number, email: string ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() :string {
        return this.name;
    }

    getId() :number {
        return this.id;
    }

    getEmail() :string {
        return this.email;
    }

    getRole() :string {
        return 'Employee';
    }
}