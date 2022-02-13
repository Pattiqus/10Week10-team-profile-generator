import { Employee }  from './Employee';

export class Intern extends Employee {
    private school : string;


    constructor( name: string, id: number, email: string, school: string ) {
        super(name, id, email);
        this.school = school;
    }

    getRole() :string {
        return 'Intern';
    }

    getSchool() :Object {
        return { 
            text: 'School Name',
            value: this.school,
        };
    }


}
