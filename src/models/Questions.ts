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
            message: 'Please enter ' + role + ' name.'

        },
        {
            type: 'input',
            name: 'id',
            dataType: 'number',
            message: 'Please enter ' + role + ' ID number'
        },
        {
            type: 'input',
            name: 'email',
            dataType: 'string',
            message: 'Please enter ' + role + ' email address'
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
            let reOrderdRoles = rolesAvailable.sort( ( a, b ) => {
                return a.order - b.order;
            });

            let availableRoles = [];

            reOrderdRoles.forEach( (role, roleIndex) => {
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
        order: 2,
    },
    {
        value: "manager",
        name: "Manager",
        className: "Manager",
        promptInitiator: false,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: false,
        order: 0,
    },
    {
        value: "ceo",
        name: "CEO",
        className: "Employee",
        promptInitiator: false,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: true,
        order: 3,
    },
    {
        value: "engineer",
        name: "Engineer",
        className: "Engineer",
        promptInitiator: true,
        shouldBeIncludedAsExtras: true,
        requiresClassCreation: false,
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
            },    
        ]
    },
    {
        role: "ceo",
        questions: [
            {
                type: 'input',
                name: 'ceoQ1',
                dataType: 'string',
                message: 'Please who the fucking boss is',
            },    
        ]
    },
    {
        role: "engineer",
        questions: [
            {
                type: 'input',
                name: 'github',
                dataType: 'string',
                message: 'Please enter engineers github account'
            },
        ]
    },
];