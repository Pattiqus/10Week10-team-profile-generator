import inquirer from 'inquirer';
import { Employee } from "./models/Employee";
import { Intern } from "./models/Intern";
import { Engineer } from "./models/Engineer";
import { Manager } from "./models/Manager";
import { HtmlOutput } from "./util/HtmlOutput";


// const fs = require('fs');
// const util = require('util');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter employee name.'

    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter employee email address'
    }

];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter manager office number'
    },    
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Please enter intern school'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter engineers github account'
    },
]
const continueQuestion = [
    {
        type: 'list',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        choices: ['yes', 'no',]
    },
];

const typeQuestion = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee do you want to add?',
        choices: ['engineer', 'intern',]
    },
];

/**
 * Function: init
 * Description: Initializes the application 
 */
 export async function init() {

    // # Build: Manager Questions
    let fullManagerQuestions = employeeQuestions.concat( managerQuestions );
    
    
    

    // # Define: Intern Prompt
    let internTypePrompt = () :Promise<Intern> => {
        // # Define: New Promise, gether intern details from inquirer prompt
        return new Promise( ( resolveContinue, rejectContinue ) => {
            let fullInternQuestions = employeeQuestions.concat( internQuestions );
            inquirer.prompt( fullInternQuestions )
                .then( internDetails => {
                    console.log( internDetails );
                    // # Create: New Intern
                    let newInternModel = new Intern(
                        internDetails.name,
                        internDetails.id,
                        internDetails.email,
                        internDetails.school
                    );
                    // # Continues
                    // console.log( newInternModel.getName() );
                    // console.log( newInternModel.getId() );
                    // console.log( newInternModel.getEmail() );
                    // console.log( newInternModel.getSchool() );
                    resolveContinue( newInternModel );
                });
        });
        
    };

    // # Define: Engineer Prompt
    let engineerTypePrompt = () :Promise<Engineer> => {
        return new Promise( ( resolveContinue, rejectContinue ) => {
            let fullEngineerQuestions = employeeQuestions.concat( engineerQuestions );
            inquirer.prompt( fullEngineerQuestions )
                .then( engineerDetails => {
                    console.log( engineerDetails );
                    
                    // # Create: New Intern
                    let newEngineerModel = new Engineer(
                        engineerDetails.name,
                        engineerDetails.id,
                        engineerDetails.email,
                        engineerDetails.github
                    );

                    
                    // console.log( newEngineerModel.getName() );
                    // console.log( newEngineerModel.getId() );
                    // console.log( newEngineerModel.getEmail() );
                    // console.log( newEngineerModel.getSchool() );
                    resolveContinue( newEngineerModel );
                });
        });
    };

    // # Define: Function for choosing questions based on employee type chosen
    let employeeTypePrompt = () :Promise<any> => {
        return new Promise( ( resolveContinue, rejectContinue ) => {
            inquirer.prompt( typeQuestion )
                .then( employeeType => {

                    switch( employeeType.employeeType.toLowerCase() ) {
                        case "engineer":
                            resolveContinue( engineerTypePrompt() );
                            break;
                        case "intern":
                            resolveContinue( internTypePrompt() );
                            break;
                    }

                });
        });
    };

    let allEmployees = [];

    inquirer.prompt(fullManagerQuestions)
        .then( (managerDetails)  => {
            // writeToFile("README.md", generateMarkdown(data))
            console.log(managerDetails);
            
            allEmployees.push(
                new Manager(
                    managerDetails.name,
                    managerDetails.id,
                    managerDetails.email,
                    managerDetails.officeNumber,
                )
            );

            let continueQuestionPromise = () :Promise<any> =>  { 
                return new Promise( ( resolveContinue, rejectContinue ) => {
                 inquirer.prompt(continueQuestion)
                    .then( async ( shouldContinue )  => {
                        
                        // console.log( shouldContinue );

                        if( shouldContinue.newEmployee.toLowerCase() === 'yes' ) {
                            employeeTypePrompt().then( empType => {
                                // console.log( empType );
                                allEmployees.push(
                                    empType
                                );
                                // console.log('AB');
                                resolveContinue( continueQuestionPromise() );
                            });
                        } else {
                            // console.log( allEmployees );
                            // console.log('CD');
                            resolveContinue(allEmployees);
                        }
                    });
                });
            };

            continueQuestionPromise().then( dynamicEmployees => {
                console.log('This is the final method....');
                console.log( dynamicEmployees );

                // # Generate HTML
                let htmlOutput = new HtmlOutput( dynamicEmployees );
            });

        });
}

// # Call: init
init();

