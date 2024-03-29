const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const teamArr = [];

// manager questions array 
const managerQuestions = () => {
    return inquirer
        .prompt([
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
        ])
        // .then(managerInput => {
        //     const { name, id, email, office } = managerInput;
        //     const manager = new Manager(name, id, email, office);

        //     teamArr.push(manager);
        // })
};

const employeeQuestions = () => {
    return inquirer
        .prompt([

            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add an Intern or Engineer?',
                choices: ['Intern', 'Engineer']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name?',
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
                message: 'What is the ID number?',
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
                message: 'What is the email address?',
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
                message: 'What is the school\'s name?',
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
            {
                type: 'confirm',
                name: 'add',
                message: 'Would you like to add another intern or engineer?'
            }
        ])

        // create a new engineer or a new intern and pull all the answers out and put in nrew employee/intern
        // after created push new employee onto team array
        // check if they want to add another employee
        // if they do then call employee questions (like in manager questions)
        // if they don't then create the HTML file and then pass team array in generateteam
        // will be returned html in string
        // write file with returned string 
        .then(employeeAnswers => {
            employeeData.push(employeeAnswers);
            if (employeeAnswers.add) {
                return employeeQuestions(employeeData);
            } else {
                return employeeData;
            }
        });
    };

    // writes to HTML file

    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Your team profile has been created!")
        });
    };

 
    // function to start app

    function init() {
        managerQuestions (teamArr)
        .then(managerInput => {
            const { name, id, email, office } = managerInput;
            const manager = new Manager(name, id, email, office);

            teamArr.push(manager);
            employeeQuestions()
            // (function (userInput) {
            // console.log(userInput)
            // writeFile("index.html", generateHTML(userInput));
         
        // })
       });  
    };
    // calls fucntion
    init();
     
 