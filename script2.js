const inquirer = require('inquirer');
const fs = require('fs');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
const questions = require('./prompt');
const team = [];

// Questions for the Manager

// Function to add a Manager to the team
async function addManager() {
  console.log('\nPlease enter Manager information:');
  const answers = await inquirer.prompt(questions);
  console.log(answers)
  manager(answers)
  
}

const manager = (answers)=>{
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
    console.log(manager.name)

}
async function isUserRespone(){
    console.log('\nPlease enter manager information');
    const answers = await inquirer.prompt(mutiQuestion);
    console.log(answers)
}

    // answers.name,
    // answers.id,
    // answers.email,
    // answers.officeNumber

//   team.push(manager);
//   console.log(`\n${manager.getName()} added to the team!\n`);

// Function to add an Engineer to the team
async function addEngineer() {
  console.log('\nPlease enter Engineer information:');
  const answers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );
  team.push(engineer);
  console.log(`\n${engineer.getName()} added to the team!\n`);
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
async function init(){
    await(addManager())
    await (isUserRespone())
    console.log(isUserRespone)
    await (addEngineer())
}
 init()