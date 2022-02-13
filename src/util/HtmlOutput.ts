import { Engineer } from '../models/Engineer';
import { Employee } from '../models/Employee';
import { Intern } from '../models/Intern';
import { Manager } from '../models/Manager';
import fs from 'fs';
import path from 'path';




export class HtmlOutput {

    private employees: Array<Employee | Engineer | Intern | Manager>;

    // private outputDirectory =  path.sep + '..' + path.sep + 'output';
    private outputDirectory =  path.resolve(__dirname, '..', '..', 'output');
    private baseHtmlStructure = `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <title>Team profile viewer</title>
            </head>
                
            <body>
                <header class="text-center text-white bg-primary p-3 mb-5 display-3">Team</header>
            
            <main>

            
    `;

    private footerHtmlStructure = `
            </main>
            <footer>
            </footer>
            </body>
    </html>
    `;

    constructor( employees: any ) {
        this.employees = employees;
        console.log( this.employees );
    }


    public createFile = () => {
        console.log( this.outputDirectory );
        this.outputDirectory;
        if( fs.existsSync( this.outputDirectory ) ) {
            console.log(  this.outputDirectory + ": Exists" );
        } else {
            fs.mkdirSync( this.outputDirectory );
        }

        let dynamicHtmlContent = this.generateDynamicHtml( this.employees );
        
        
        // # Write: To File
        fs.writeFileSync( this.outputDirectory + path.sep + 'index.html', dynamicHtmlContent);


    }

    private generateDynamicHtml = ( employees ) :string => {
        let dynamicHtml = '';

        dynamicHtml += this.baseHtmlStructure;
        employees.forEach( ( currentEmployee, currentEmployeeIndex ) => {
            
            
            dynamicHtml += `<div class="container">
                                <div class="row justify-conent-center">`;
            dynamicHtml += this.createRoleTemplate( currentEmployee );
            dynamicHtml +=      `</div>
                            </div>`;

        });
        
       

        dynamicHtml += this.footerHtmlStructure;
        
        return dynamicHtml;
    }

    private createRoleTemplate = (role) => {
        let roleHtml = `
        <article class="col-4 mt-3">
            <div class="card">
                <section class="card-header bg-primary">
                    <h2 class="text-white">${role.name}</h2>
                    <h3 class="text-white"><i class="bi bi-person-workspace"></i> ${role.getRole() }</h3>
                </section>
    
                <section class="card-body bg-light">
                    <p class="p-2 m-1 bg-white border">ID: ${role.id}</p>
                    <p class="p-2 m-1 bg-white border">Email: ${role.email}</p>`;

                if( ['manager', 'engineer', 'intern'].indexOf( role.getRole().toLowerCase() ) >= 0 ) {
                    let roleOffice;
                    switch( role.getRole().toLowerCase() ) {
                        case "manager":
                            roleOffice = role.getOfficeNumber();
                            console.log( roleOffice );
                            break;
                        case "engineer":
                            roleOffice = role.getGithub();
                            console.log( roleOffice );
                            break;
                        case "intern":
                            roleOffice = role.getSchool();
                            console.log( roleOffice );
                            break;
                    }

                    roleHtml += `
                    <p class="p-2 m-1 bg-white border">${ roleOffice.text }: ${ roleOffice.value }</p>
                    `;
                }

        roleHtml += `</section>
            </div>           
        </article>
        `;

        return roleHtml;
    }





}