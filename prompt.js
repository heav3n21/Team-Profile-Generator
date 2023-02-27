
// Questions for the Manager

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'id',
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
  
  const mutiQuestion = [
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
  
  // Questions for the Engineer
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Engineer's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Engineer's employee ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Engineer's email address?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub username?",
    },
  ];
  
  // Questions for the Intern
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Intern's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Intern's employee ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Intern's email address?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the Intern's school?",
    },
  ];

  module.exports = {
    managerQuestions,
    internQuestions,
    engineerQuestions,
    mutiQuestion,
  };