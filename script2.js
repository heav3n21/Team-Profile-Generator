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




  function Engineer ({name,id,email,github}){
 
    this.name = name ;
    this.id = id;
    this.email = email;
    this.github = github;
    console.log(`\n${name} added to the team!\n`)
}
async function addEngineer() {
    console.log('\nPlease enter Engineer information:');
    const answers = await inquirer.prompt(engineerQuestions);
    const person = new Engineer(answers);
    console.log(person);
    fs.stat(fileEngineer, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
      
        if (stats.size === 0) {
            console.log(person,"yo");
            writeToFile(fileEngineer,person)
        } else {
          console.log('File has content');
          console.log(person,"yoooooo");
          readTheFile(fileEngineer,person)
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
fs.readFile(`./UserInputjson.json/Engineer.json`,'utf-8',(err,data)=>{
    if (err) {
        throw err;
    }
    const jsonData = JSON.parse(data);
    jsonData.push(answers)
    console.log("bitch",answers);

    console.log(jsonData,'hi');


})
   

//     console.log(answers);
    
//     console.log(answers, 'json');
//     console.log(jsonData, 'hi matthew');
//    const updatedData = jsonData


// writeToFile(fileEngineer, updatedData)
// return

}



init()