const Employee = require('./Employee');

// constructs manager class and methods
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
};

module.exports = Manager