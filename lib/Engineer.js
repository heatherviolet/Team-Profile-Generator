const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calls parent class constructor
        super(name, id, email);
        this.github = github;
    }
    get employee() {
        return 'Engineer';
    }
    get github() {
        return this.github;
    }
}

module.exports = Engineer;