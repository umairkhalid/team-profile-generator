// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateHTML');

// lib modules
const Manager = require('./lib//Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let fileName = "./dist/index.html";