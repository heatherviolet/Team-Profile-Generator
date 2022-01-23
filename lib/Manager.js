const Manager = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        // calls parent class constructor
        super(name, id, email);
        this.office = office;
    }
    get employee() {
        return 'Manager';
    }
    get office() {
        return this.office;
    }
}


module.exports = Manager;