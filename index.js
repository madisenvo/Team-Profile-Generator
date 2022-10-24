const generateHTML = require('./src/generateHTML');
const inquirer = require("inquirer");
const fs = require('fs'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: "managerName",
        message: "Enter the manager's name: "
    },
    {
        type: 'input',
        name: "employeeId",
        message: "Enter the manager's employee ID number: "
    },
    {
        type: 'input',
        name: "emailAddress",
        message: "Enter the manager's email address: "
    },
    {
        type: 'input',
        name: "officeNumber",
        message: "Enter the manager's office number: "
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: "engineerName",
        message: "Enter the engineer's name: "
    },
    {
        type: 'input',
        name: "id",
        message: "Enter the engineer's employee ID number: "
    },
    {
        type: 'input',
        name: "email",
        message: "Enter the engineer's email address: "
    },
    {
        type: 'input',
        name: "gitHub",
        message: "Enter the engineer's GitHub username: "
    },
];

const internQuestions = [
    {
        name: "internName",
        message: "Enter the intern's name: "
    },
    {
        name: "id",
        message: "Enter the intern's employee ID number: "
    },
    {
        name: "email",
        message: "Enter the intern's email address: "
    },
    {
        name: "school",
        message: "Enter the intern's school: "
    },
];