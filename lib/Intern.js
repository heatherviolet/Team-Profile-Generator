const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // calls parent class constructor
        super(name, id, email);
        this.school = school;
    }
    getEmployee() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
