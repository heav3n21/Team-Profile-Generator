const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school

    }
    getRoleIntern() {
        return `${this.name} is a intern`
 
     }
     getschool(){
         return  `${this.name} attends ${this.school}`
     }
 
}


module.exports = Intern;