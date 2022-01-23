const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calls parent class constructor
        super(name, id, email);
        this.github = github;
    }
    getEmployee() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;