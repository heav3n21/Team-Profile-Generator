
const inquirer = require("inquirer");
const { managerQuestions, internQuestions, engineerQuestions, mutiQuestion } = require(`../prompt`);
const internClass = require('./internClass')



class employee {
    constructor(name, id, email) {
        this.name = name,


            this.id = id,
            this.email = email

    }


    getID() { }

    getEmail() { }

    getRole() {
    }
    gitHub() { }


}
async function getPostion() {
    console.log('P has begun')
    const roleQuestion = [
        {
            name: 'confirm',
            type: 'list',
            message: 'Would you like to add a egineer or an itern or would you like to finish building your team?',
            choices: [
                'egineer',
                'intern',
                'complete build',
            ]
        },
    ]
    const answers = await inquirer.prompt(mutiQuestion);
    const role = answers.confirm
    muti(role)
    function muti (userRespone){
        
        if (userRespone == 'engineer') {
            // addEngineer();
            console.log('so you want a enginner hih');
        }
        else if (userRespone == 'intern') {
          let intern = new internClass
          intern.start()
            console.log('so you want a intern hih');
        } else {
            console.log('we ready mf')
        }
    }


}
module.exports = { employee, getPostion }
