const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }
    getID() {
        console.log('id');

    }

}

module.exports = Manager;