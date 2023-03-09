const inquirer = require('inquirer')


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
        name: 'officeNum',
        message: "What is the Manager's office number?",
    },
];



const Listpostion = [
    {
        name: 'confirm',
        type: 'list',
        message: 'Would you like to add a egineer or an itern or would you like to finish building your team?',
        choices: [
            'engineer',
            'intern',
            'complete build',
        ]
    },
]




async function RoleQuestions(workPostion) {

    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the ${workPostion}s name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${workPostion}s ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${workPostion}s email address?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the ${workPostion}'s GitHub username?`,
            when: () => workPostion == `engineer`

        },
        {
            type: 'input',
            name: 'school',
            message: `Where does the ${workPostion} attend School`,
            when: () => workPostion == `intern`

        },

    ])
}
module.exports = {
    managerQuestions,
    Listpostion,
    RoleQuestions,
}