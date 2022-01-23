const Intern = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // calls parent class constructor
        super(name, id, email);
        this.school = school;
    }
    get employee() {
        return 'Intern';
    }
    get school() {
        return this.school;
    }
}

module.exports = Intern;
