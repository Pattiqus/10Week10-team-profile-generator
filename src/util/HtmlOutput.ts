import { Engineer } from '../models/Engineer';
import { Employee } from '../models/Employee';
import { Intern } from '../models/Intern';
import { Manager } from '../models/Manager';
import { fstat } from 'fs';
const createManager = (Manager) => {
    return`
    <article>: class="col-4 mt-3">
        <div class="card">
            <section class="card-header bg-primary">
                <h2 class="text-white">${Manager.name}</h2>
                <h3 class='text-white"><i class="bi bi-person-workspace"></i> Manager</h3>
            </section>

            <section class="card-body bg-light">
                <p class="p-2 m-1 bg-white border">ID: ${Manager.id}</p>
                <p class="p-2 m-1 bg-white border">Email: ${Manager.email}</p>
                <p class="p-2 m-1 bg-white border">Office Number: ${Manager.officeNumber}</p>
            </section>
        </div>           
    </article>
    `;
}

const createEngineer = (Engineer) => {
    return`
    <article>: class="col-4 mt-3">
        <div class="card">
            <section class="card-header bg-primary">
                <h2 class="text-white">${Engineer.name}</h2>
                <h3 class='text-white"><i class="bi bi-laptop"></i> Engineer</h3>
            </section>

            <section class="card-body bg-light">
                <p class="p-2 m-1 bg-white border">ID: ${Engineer.id}</p>
                <p class="p-2 m-1 bg-white border">Email: ${Engineer.email}</p>
                <p class="p-2 m-1 bg-white border">Office Number: ${Engineer.github}</p>
            </section>
        </div>           
    </article>
    `;
}
const createIntern = (Intern) => {
    return`
    <article>: class="col-4 mt-3">
        <div class="card">
            <section class="card-header bg-primary">
                <h2 class="text-white">${Intern.name}</h2>
                <h3 class='text-white"><i class="bi bi-person-workspace"></i> Manager</h3>
            </section>

            <section class="card-body bg-light">
                <p class="p-2 m-1 bg-white border">ID: ${Intern.id}</p>
                <p class="p-2 m-1 bg-white border">Email: ${Intern.email}</p>
                <p class="p-2 m-1 bg-white border">Office Number: ${Intern.school}</p>
            </section>
        </div>           
    </article>
    `;
}



export class HtmlOutput {

    private employees: Array<Employee | Engineer | Intern | Manager>;

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

    constructor( employees: Array<Employee | Engineer | Intern | Manager> ) {
        this.employees = employees;
    }


    outputFile = () => {
        
    }

    generateDynamicHtml = ( employees ) => {
        let dynamicHtml = '';

        dynamicHtml += this.baseHtmlStructure;
        employees.forEach( ( currentEmplyeeIndex, currentEmployee ) => {
            
            
            dynamicHtml += `<div class="container">
                                <div class"row justify-conent-center">
                                    ${employees}
                                </div>
                            </div>`;


            console.log( currentEmployee.getName() );
            console.log( currentEmployee.getId() );
            console.log( currentEmployee.getEmail() );
            // console.log( currentEmployee.getSchool() );

            dynamicHtml += '</div>';
        });
        
        /**
         * Function: employeeCardGenerator
         * Description: Compliles team profile cards into an arra to then be added to generateDynamicHtml
         * @param data 
         */
        const employeeCardGenerator = (data) => {
            const cardArray = [];

            for (let i=0; 1 < data.length; i++) {
                const currentEmployee = data[i];
                 
                if ( Manager ) {
                    const managerCard = createManager(currentEmployee);
                    cardArray.push(managerCard);
                } else if ( Engineer ) {
                    const engineerCard = createEngineer(currentEmployee);
                }
            }
        }

        dynamicHtml += this.footerHtmlStructure;
        
    }




}