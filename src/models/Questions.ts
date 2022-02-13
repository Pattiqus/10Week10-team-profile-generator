/**
 * File: Questions.ts
 * Description: File contains hardcoded questions,
 *      but with the idea that these can come from
 *      an API/database source for dynamic results 
 *      upon team members.
 */



export const employeeQuestions = ( role: string ) => {
    return [
        {
            type: 'input',
            name: 'name',
            dataType: 'string',
            message: 'Please enter ' + role + ' name.',
            validate: nameInput => {
                let nameRegexTest = /^[a-zA-Z\s\-\'\.]+$/g;

                if (nameRegexTest.test( nameInput )) {
                    return true;
                } else {
                    throw new Error('Please enter a valid name containing only alpha characters and/or the following characters inclusive of spaces: ".", "\'", "-"');
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            dataType: 'number',
            message: 'Please enter ' + role + ' ID number',
            validate: idInput => {
                if (isNaN(idInput)) {
                    throw new Error('Input can only contain valid number');
                } else {
                    return true;
                    
                }
            }
        
        },
        {
            type: 'input',
            name: 'email',
            dataType: 'string',
            message: 'Please enter ' + role + ' email address',
            validate: emailInput => {

                let emailRegexTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

                if (emailRegexTest.test(emailInput)) {
                    return true;
                } else {
                    throw new Error('Please enter a valid email address e.g. test@yahoo.co.uk');
                }
            }
        }

    ];
}




export const continueQuestion = [
    {
        type: 'list',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        choices: ['yes', 'no',]
    },
];

export const typeQuestion = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee do you want to add?',
        choices: () => {
            let reOrderedRoles = rolesAvailable.sort( ( a, b ) => {
                return a.order - b.order;
            });

            let availableRoles = [];

            reOrderedRoles.forEach( (role, roleIndex) => {
                if( role.shouldBeIncludedAsExtras === true ) {
                    availableRoles.push( role );
                }
            });

            return availableRoles;
        }
    },
];


/**
 * Description: Mock a roles that should be stored
 *      within a database table with their given 
 *      values and functions.
 */
export const rolesAvailable = [
    {
        value: "intern",
        name: "Intern",
        className: "Intern",
        promptInitiator: false,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: false,
        extraParams: [],
        order: 2,
    },
    {
        value: "manager",
        name: "Manager",
        className: "Manager",
        promptInitiator: true,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: false,
        extraParams: [],
        order: 0,
    },
    // {
    //     value: "ceo",
    //     name: "CEO",
    //     className: "Ceo",
    //     promptInitiator: false,
    //     shouldBeIncludedAsExtras: true,
    //     requiresClassCreation: true,
    //     extraParams: [
    //         {
    //             name: 'yearsOfService',
    //             type: 'number',
    //         }
    //     ],
    //     order: 3,
    // },
    {
        value: "engineer",
        name: "Engineer",
        className: "Engineer",
        promptInitiator: false,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: false,
        extraParams: [],
        order: 1,
    },
];


/**
 *  Description: 
 * 
 */

export const questionRolesApi = [
    {
        role: "intern",
        questions: [
            {
                type: 'input',
                name: 'school',
                dataType: 'string',
                message: 'Please enter intern school',
                validate: schoolInput => {

                    let schoolRegexTest = /^[a-zA-Z\s\-\.]+$/g;

                    if ( schoolRegexTest.test(schoolInput) ) {
                        return true;
                    } else {
                        throw new Error('School can only contain non numeric characters and also "."," ","-"');
                    }
                }
            },
        ]
    },
    {
        role: "manager",
        questions: [
            {
                type: 'input',
                name: 'officeNumber',
                dataType: 'number',
                message: 'Please enter manager office number',
                validate: officeNumberInput => {
                    if (isNaN(officeNumberInput)) {
                        throw new Error('Input can only contain valid number');
                        
                    } else { 
                        return true;
                        
                    }
                }
            },    
        ]
    },
    // {
    //     role: "ceo",
    //     questions: [
    //         {
    //             type: 'input',
    //             name: 'ceoQ1',
    //             dataType: 'string',
    //             message: 'Please who the fucking boss is',
    //         },    
    //     ]
    // },
    {
        role: "engineer",
        questions: [
            {
                type: 'input',
                name: 'github',
                dataType: 'string',
                message: 'Please enter engineers github account',
                validate: githubInput => {
                    let githubRegexTest = /https:\/\/github\.com\/.*/g;
                    if ( githubRegexTest.test(githubInput) ) {
                        return true;
                    } else {
                        throw new Error('Please enter a valid github profile URL e.g. https://github.com/pattiqus');
                    }
                }
            },
        ]
    },
];