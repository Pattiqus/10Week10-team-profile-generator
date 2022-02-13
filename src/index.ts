import inquirer from 'inquirer';
import { HtmlOutput } from "./util/HtmlOutput";
import { DynamicClass } from "./util/DynamicClass";
import {
    questionRolesApi,
    rolesAvailable,
    employeeQuestions,
    continueQuestion,
    typeQuestion,
} from "./models/Questions";
import fs from 'fs';
import path from 'path';


// # Define: Function for choosing questions based on employee type chosen
const employeeTypePrompt = () => {
    console.log( typeQuestion );
    return inquirer.prompt( typeQuestion )
        .then( employeeType => {
            console.log( employeeType );
            
            let employeeRole = employeeType.employeeType;
            console.log( employeeRole );
            let dynamicRolePrompt = () => {
                let currentRole = rolesAvailable.find( ( role ) => {
                    return role.value === employeeRole;
                });
                console.log( currentRole );
                // # Retrieve: Relevant extra questions based on dynamic role
                let currentRoleQuestionsValue = questionRolesApi.find( ( questionRole ) => {
                    return questionRole.role === currentRole.value;
                });

                let currentRoleQuestions = currentRoleQuestionsValue.questions;
                let roleQuestions = employeeQuestions( employeeRole ).concat( currentRoleQuestions );
                return inquirer.prompt( roleQuestions )
                    .then( roleDetails => {
                        console.log( roleDetails );
                        
                        return import( __dirname + path.sep + 'models' + path.sep + currentRole.className + '.js' ).then( ( module:Object ) => {
                            let className :any = Object.keys(module)[ 0 ]; 
                            
                            let dynamicValues = Object.values( roleDetails );
                            let dynamicClassInstance = new DynamicClass( className, dynamicValues );

                            return dynamicClassInstance;
                        });

        
                    });
            };

            return dynamicRolePrompt();

        });
};



// # Determine: Role that has precedence & should have the first question ()

// # Reorder: Roles based on order of data 
let reOrderdRoles = rolesAvailable.sort( ( a, b ) => {
    return a.order - b.order;
});

// # Find: First available role with first question toggle
let initatingRole = reOrderdRoles.find( ( role ) => {
    return role.promptInitiator === true;
});

console.log( initatingRole );


// # Retrieve: Relevant extra questions based on dynamic role
let initiatingRoleQuestionsValue = questionRolesApi.find( ( questionRole ) => {
    return questionRole.role === initatingRole.value;
});

let initiatingRoleQuestions = initiatingRoleQuestionsValue.questions;

// # Build: Starting Inquirer Prompt
let startingPrompt = () => {
    let startingRoleQuestions = employeeQuestions( initatingRole.name ).concat( initiatingRoleQuestions );
    
    // # Define: Empty Array for dynamic team roles
    let allRoles = [];

    inquirer.prompt(startingRoleQuestions)
        .then( (startingRoleDetails)  => {

            // # Debug: startingRoleDetails ==> Inquirer question names as an object
            console.log( startingRoleDetails );


            // # Dynamically Extract: Each of those keys 
            let dynamicValues = Object.values( startingRoleDetails );

            // # Dynamically Extract: Given ClassName for initiating Role
            let initatingRoleClassName = initatingRole.className;

            // # Debugging: Target path
            console.log( __dirname + path.sep + 'models' + path.sep + initatingRoleClassName + '.js' );

            // # Check: File/Model Exists
            if(  fs.existsSync( __dirname + path.sep + 'models' + path.sep + initatingRoleClassName + '.js' ) ) {
                
                import( __dirname + path.sep + 'models' + path.sep + initatingRoleClassName + '.js' ).then( ( module:Object ) => {
                    let className :any = Object.keys(module)[ 0 ]; 
                    let dynamicClassInstance = new DynamicClass( className, dynamicValues );
                    allRoles.push(
                        dynamicClassInstance
                    );
                    
                    let continueQuestionPrompt = () => {
                        return new Promise( ( resolveContinue, rejectContinue ) => {
                            inquirer.prompt(continueQuestion)
                                .then( async ( shouldContinue )  => {
                                    console.log( shouldContinue );
                                    if( shouldContinue.newEmployee.toLowerCase() === 'yes' ) {
                                        employeeTypePrompt().then( empType => {

                                            allRoles.push(
                                                empType
                                            );
                                            resolveContinue ( continueQuestionPrompt() );
                                        });
                                    } else {
                                        resolveContinue( allRoles );
                                    }
                            });
                        });
                    };
                    continueQuestionPrompt().then( dynamicEmployees => {
                        console.log('This is the final method....');
                        console.log( dynamicEmployees );
        
                        // # Generate HTML
                        let htmlOutput = new HtmlOutput( dynamicEmployees );
                        htmlOutput.createFile();
                    });
        

                });
            } else {
                throw Error(
                    "Dynamic Role (" +
                    initatingRole.name +
                    ") has missing model for path: " + __dirname + path.sep + "models" + path.sep +
                    initatingRole.className + ".js" 
                );
            }

            // # Debugging: Output the roles that were added to all roles
            console.log( allRoles );
        });

};

startingPrompt();

