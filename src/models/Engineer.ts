import { Employee }  from './Employee';

export class Engineer extends Employee {
    private github : string;

    constructor( name: string, id: number, email: string, github: string ) {
        super(name, id, email);
        this.github = github;
    }

    getRole() :string {
        return 'Engineer';
    }

    getGithub() :string {
        return this.github;
    }

}