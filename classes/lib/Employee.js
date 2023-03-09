class Employee {
    constructor(name, id, email) {
        this.name = name,
            this.id = id,
            this.email = email


    }
    getName(){
        return `his name is ${this.name}`
    }
getemail(){
    return `his email is ${this.email}`
}
getRole(){
    return `Employee`
}

}




module.exports = Employee;