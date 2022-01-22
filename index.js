const fs = require('fs');
const inquirer = require('inquirer');

const generateTeam = require("./src/generateHTML");

// empty array for team
const team = [];
// prompts manager questions 
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
            message: 'What is the manager\'s ID number?',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the manager\'s ID number!');
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
        },
        {
            type: 'list',
            name: 'employeeList',
            message: 'Would you like to add an Intern or Engineer?',
            choices: ['Intern', 'Engineer', 'Team is done']
        },
    ];

// intern array

const internQuestions = [
        {
            type: 'input',
            name: 'internName',
            message: 'What the intern\'s name?',
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What the ID number?',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What the email address?',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What the school\'s name?',

            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
    ];

// engineer array 

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What the engineer\'s name?',
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What the ID number?',
        validate: employeeIdInput => {
            if (employeeIdInput) {
                return true;
            } else {
                console.log('Please enter an ID number!');
                return false;
            }
        }
    },
    {    
        type: 'input',
        name: 'engineerEmail',
    message: 'What the email address?',
    validate: engineerEmailInput => {
        if (engineerEmailInput) {
            return true;
        } else {
            console.log('Please enter an email address!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What the GitHub Username?',

    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter a GitHub Username!');
            return false;
        }
    }
},
];
// writes to HTML file

function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Your team profile has been created!")
    });
};

function init() {
    inquirer.prompt(managerQuestions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("index", generateTeam(userInput));
    });
};

// function to start questions
init();