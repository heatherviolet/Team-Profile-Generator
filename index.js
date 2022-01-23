const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require("./src/generateHTML");

// questions array 

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager\'s name?',
        validate: managerNameInput => {
            if (managerNameInput) {
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
        name: 'employee',
        message: 'Would you like to add an Intern or Engineer?',
        choices: ['Intern', 'Engineer', 'Team is done']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What the name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What the ID number?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What the email address?',
        validate: emailInput => {
            if (emailInput) {
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
        when: ({ employeeList }) => employeeList === "Intern",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What the GitHub Username?',
        when: ({ employeeList }) => employeeList === "Engineer",
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
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("index", generateHTML(userInput));
        });
};

// function to start questions
init();