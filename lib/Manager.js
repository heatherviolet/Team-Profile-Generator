const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        // calls parent class constructor
        super(name, id, email);
        this.office = office;
    }
    getEmployee() {
        return 'Manager';
    }
    getOffice() {
        return this.office;
    }
}


module.exports = Manager;