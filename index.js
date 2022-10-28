const template = require('./src/template.js');
const inquirer = require("inquirer");
const fs = require('fs'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArr = [];

// user selects team member to add
function createTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addEmployee',
                massage: 'Select a type of team member to add: ',
                choices: ['Engineer', 'Intern', 'My team is complete.']
            }
        ]).then(function (userInput) {
            switch(userInput.addEmployee) {
              case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
              case "My team is complete.":
                generateHTML();
                break;
            }
        })
};

// promps user with engineer-specific questions and adds to team array
function addEngineer() {
    inquirer
        .prompt([
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
            ]).then((answers) => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            teamArr.push(newEngineer)
            createTeam()
        })
};

// promps user with intern-specific questions and adds to team array
function addIntern() {
    inquirer
        .prompt([
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
        ]).then((answers) => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamArr.push(newIntern)
            createTeam()
        })
};

// promps user with manager-specific questions and adds to team array
function addManager() {
    inquirer
        .prompt([
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
            ]).then((answers) => {
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.office)
            teamArr.push(newManager)
            createTeam()
        })
};

// writes file using template
function generateHTML() {
    fs.writeFile('./dist/output.html',template(teamArr), (err) => {
        if(err) console.log(err)
        else console.log("Successfully generated HTML!")
})
};

addManager();