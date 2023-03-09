const inquirer = require('inquirer')
const { managerQuestions, Listpostion, RoleQuestions } = require(`../prompts`)
const Engineer = require('./lib/classEngineer');
const fs = require(`fs`)
const Employee = require('./lib/Employee');
const Manager = require('./lib/classManager')
const Intern = require('./lib/classIntern')



async function initQuestions() {
    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.managerID, answers.email, answers.officeNum)
    await WriteToFile(`./db/manager.json`, manager)
    getPostion()
}
async function getPostion() {
    const answers = await inquirer.prompt(Listpostion)
    const chosenPostion = answers.confirm
   

    if (chosenPostion == 'engineer') {

        mainQuestions(chosenPostion)
    }

    else if (chosenPostion == 'intern') {

        mainQuestions(chosenPostion)
    }

    else {
        console.log('team has been created')
    }
}
async function mainQuestions(workPostion) {
    console.log(`Please provide the ${workPostion}'s following information`);

    const answers = await (RoleQuestions(workPostion))

    switch (workPostion) {
        case "intern":
            console.log(" hes a intern dumb mf")
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            console.log(intern);
            WriteToFile(`./db/intern.json`, intern)
            getPostion()
            break;

        case `engineer`:
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

            await WriteToFile(`./db/engineer.json`, engineer)
            getPostion()
            console.log('hi matthew 666')

            break;

        default:
            break;
    }

}

async function WriteToFile(fileName, data) {

    if (fs.existsSync(fileName)) {

        const jsonFile = fs.readFileSync(fileName, `utf-8`);
        let readJsonData = JSON.parse(jsonFile);
        readJsonData.push(data);
        fs.writeFile(fileName, JSON.stringify(readJsonData, null, 4), (err) =>
            err ? console.log(err) : console.log('it worked file was written'))
            return

    } else { console.log('yeah... it dont') }

}





initQuestions()
module.exports = Employee;