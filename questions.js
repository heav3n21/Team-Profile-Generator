const fs = require('fs')
const inquirer = require('inquirer')
const methods = require('./functions/function')
const managerFile = 'managerFile.js';





let questions = function() {
    inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'what is the manager`s name?',
        },
        {
            name: 'managerID',
            type: 'input',
            message: 'What is your managers ID? ',

        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'what is your managers email address?',

        },
        {
            name: 'managerOfficeNum',
            type: 'input',
            message: 'What is your manager`s office number?',
        },
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


    ])

        .then(function data(data) {
            console.log(data)
            writeToFile(managerFile, data)
            if (data.confirm == `egineer`) {
                inquirer
                    .prompt([
                        {
                            type: `input`,
                            name: `engineerName`,
                            message: `what is the enginner's name? `
                        },
                        {
                            type: `input`,
                            name: `engineerID`,
                            message: `what is the enginner's ID? `
                        },
                        {
                            type: `input`,
                            name: `engineerEmail`,
                            message: `what is the enginner's email? `
                        },
                        {
                            type: `input`,
                            name: `engineerGithub`,
                            message: `what is the enginner's Github username? `
                        },
                        {
                            name: 'confirm',
                            type: 'list',
                            message: 'Would you like to add a egineer or an itern or would you like to finish building your team?',
                            choices: [
                                'egineer',
                                'intern',
                                'all done.',
                            ]
                        },



                    ])
                   
               
                    .then(data => {
                        if (data.confirm = 'all done.') {
                            return console.error('work has been addeddddd')
        
                        }

                })
                
            }
            else if (data.confirm = 'all done.') {
                return console.error('all done number 4')

            }
            else if (data.confirm == `intern`) {
                inquirer
                    .prompt([
                        {

                            type: `input`,
                            name: `internName`,
                            message: `what is the intern's name? `
                        },
                        {
                            type: `input`,
                            name: `internID`,
                            message: `what is the intern's ID? `
                        },
                        {
                            type: `input`,
                            name: `internEmail`,
                            message: `what is the intern's email? `
                        },
                        {
                            type: `input`,
                            name: `engineerschool`,
                            message: `what is the enginner's Github username? `
                        }


                    ])
                    .then(data => {

                        console.log(data);

                    })
            }

        })

};



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('works')
    );

}


function init() {
    questions()
}


init();