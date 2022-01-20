const inquirer = require('inquirer');

// manager questions array
const managerQuestions = [
        {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter the manager\'s name!');
            return false;    
            }
        }
        },
        {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s ID?',
        validate: managerIdInput => {
            if (managerIdInput) {
            return true;
            } else {
            console.log('Please enter the manager\'s ID!');
            return false;    
            }
        }
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager\'s email address?',
        validate: managerEmailInput => {
            if (managerEmailInput) {
            return true;
            } else {
            console.log('Please enter the manager\'s email!');
            return false;    
            }
        }
        },
        {
        type: 'input',
        name: 'office',
        message: 'What is the office number?',
        validate: officeInput => {
            if (officeInput) {
            return true;
            } else {
            console.log('Please enter the office number!');
            return false;    
            }
        }
        }
    ];