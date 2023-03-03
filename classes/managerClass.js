const inquirer = require('inquirer')
const employee = require('./employeeClass.js')
const fs = require('fs')

class Manager extends employee{
    

    constructor(id,officeNumber,name,email){
        super(name,id,email)
        
        this.officeNumber = officeNumber
        
    }

    getRole(){
    }

    async start(x){
         console.log("it started",x)
        const managerQuestions = [
        {
          type: 'input',
          name: 'name',
          message: "What is the Manager's name?",
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is the Manager's employee ID?",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the Manager's email address?",
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is the Manager's office number?",
        },
      ];
      const answers = await inquirer.prompt(managerQuestions);
       const manager = new Manager(answers)
       console.log(manager.email,'line 12')
      writeToFile('./daddy.json', manager)
    
    
    
    
    }
    
};

let writeToFile = function(fileName, data) {
     fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) =>
         err ? console.log(err) : console.log('works')
     );

}

module.exports = Manager

















