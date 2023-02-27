const inquirer = require('inquirer');
const fs = require('fs');

const { managerQuestions, internQuestions, engineerQuestions, mutiQuestion } = require('./prompt');
const fileManager = './UserInputjson.json/ilovecoraline.json'
const fileEngineer = './UserInputjson.json/Engineer.json'

const team = [];


// Function to add a Manager to the team


async function addManager() {
    console.log('\nPlease enter Manager information:');
    const answers = await inquirer.prompt(managerQuestions);
    await manager(answers)
    writeToFile(fileManager, answers)
}
manager = (answers) => {
    answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
}






async function isUserRespone() {
    console.log('\nPlease enter manager information');
    const answers = await inquirer.prompt(mutiQuestion);
    console.log(answers, ":line30")
    await muti(answers)
}

const muti = (answers) => {
    const userRespone = answers.confirm
    console.log(typeof userRespone);
    if (userRespone == 'egineer') {
        addEngineer();
    }
    else if (userRespone == 'intern') {
        addIntern()
    } else {
        console.log('we ready mf')
    }
}




const Engineer = (answers) => {
    answers.name,
        answers.id,
        answers.email,
        answers.github
    console.log(`\n${answers.name} added to the team!\n`)
}
async function addEngineer() {
    console.log('\nPlease enter Engineer information:');
    const answers = await inquirer.prompt(engineerQuestions);
    Engineer(answers);
    fs.stat(fileEngineer, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
      
        if (stats.size === 0) {
            writeToFile(fileEngineer,answers)
        } else {
          console.log('File has content');
          readTheFile(fileEngineer,answers)
        }
      });





}

// Function to add an Intern to the team
async function addIntern() {
    console.log('\nPlease enter Intern information:');
    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
    );
    team.push(intern);
    console.log(`\n${intern.getName()} added to the team!\n`);
}
// addManager()
async function init() {
    await (addManager())
    await (isUserRespone())

}
//write to files

function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) =>
        err ? console.log(err) : console.log('works')
    );

}
function readTheFile(fileEngineer,answers){
    console.log('dude go sleep');
fs.writeFileSync(`./UserInputjson.json/Engineer.json`,data,'utf-8'){
   
    console.log(data,'hi');

    const jsonData = JSON.parse(data);
    console.log(answers);
    jsonData.push(answers)
    console.log(answers, 'json');
    console.log(jsonData, 'hi matthew');
   const updatedData = jsonData
 

writeToFile(fileEngineer, updatedData)
return

}


init()