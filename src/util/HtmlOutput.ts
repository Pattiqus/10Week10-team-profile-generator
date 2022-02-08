import { Engineer } from '../models/Engineer';
import { Employee } from '../models/Employee';
import { Intern } from '../models/Intern';
import { Manager } from '../models/Manager';
import { fstat } from 'fs';
export class HtmlOutput {

    private employees: Array<Employee | Engineer | Intern | Manager>;

    private baseHtmlStructure = `
        <!DOCTYPE html>
        <html>
            <head></head>
        
            <body>
            
    `;

    private footerHtmlStructure = `
            </div>
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
            
            
            dynamicHtml += '<div class="employee-card">';


            console.log( currentEmployee.getName() );
            console.log( currentEmployee.getId() );
            console.log( currentEmployee.getEmail() );
            // console.log( currentEmployee.getSchool() );

            dynamicHtml += '</div>';
        });
        
        dynamicHtml += this.footerHtmlStructure;
        
    }




}