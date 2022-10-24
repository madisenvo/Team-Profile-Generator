const template = require('./src/template.js');
const inquirer = require("inquirer");
const fs = require('fs'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's employee ID number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address: "
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter the manager's office number: "
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address: "
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Enter the engineer's GitHub username: "
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID number: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address: "
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school: "
    },
];

function createTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addEmployee',
                massage: 'Select a type of team member to add: ',
                choices: ['Manager', 'Engineer', 'Intern', 'My team is complete.']
            }
        ]).then(function (userInput) {
            switch(userInput.addEmployee) {
              case "Manager":
                addManager();
                break;
              case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
      
              case "My team is complete.":
                buildHTML();
                break;
            }
        })
};

function addManager() {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamArray.push(newManager)
            createTeam()
        })
};

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            teamArray.push(newEngineer)
            createTeam()
        })
};

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamArray.push(newIntern)
            createTeam()
        })
};

function buildHTML() {
    fs.writeFile('./dist/output.html',template(teamArray), (err) => {
        if(err) console.log(err)
        else console.log("successfully wrote html output")
})
};

createTeam();