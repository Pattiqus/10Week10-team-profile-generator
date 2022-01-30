import inquirer from 'inquirer';

const fs = require('fs');
const util = require('util');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a detailed description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What else is the user required to install to run this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please leave some short & detailed instructions on how the user can use this application.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands are needed in order to test this application'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which Licences are being used for this application?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email?'
    }
];

/**
 * Function: init
 * Description: Initializes the application 
 */
 export async function init() {
    inquirer.prompt(questions)
        .then((data) => {
            // writeToFile("README.md", generateMarkdown(data))
            console.log(data);
        });
}

// # Call: init
init();

