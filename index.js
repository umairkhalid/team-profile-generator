// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
const buildHTML = require('./src/buildHTML');
const buildBoilerPlate = require('./src/buildBoilerPlate');

// lib modules
const Manager = require('./lib//Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let fileName = "./dist/index.html";

