
const inquirer = require("inquirer");
const { managerQuestions, internQuestions, engineerQuestions, mutiQuestion } = require(`../prompt`);
const Manager = require("./managerClass");



class employee {
    constructor(name, manager, email) {
        this.name = name,
        

            this.manager = manager,
            this.email = email
           
    }


    getID() { }

    getEmail() { }

    getRole() { }
    gitHub() { }


}
module.exports = employee
