const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const generateTeam = require('./src/generateHTML');

const Manager = require('./lib//Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

