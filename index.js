// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// lib modules
const Manager = require('./lib//Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// CommonJS modules
const buildHTML = require('./src/buildHTML');
const buildBoilerPlate = require('./src/buildBoilerPlate');
const arrayQuestion = require('./lib/Questions');

// file name and path declaration
let fileName = "./dist/index.html";

// Initialize array to store input data
let team = [];
let question = [];

// function to initialize app
function init() {
  question = arrayQuestion("Manager");

  inquirer
    .prompt([
      ...question,
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate(officeNumber) {
          const validOfficeNumber = /^\d*$/gi;
          if (!validOfficeNumber.test(officeNumber)) {
            return "Invalid Number!";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      // create a Manager object from the class

      const manager = new Manager(
        answers.employeeId, 
        answers.name, 
        answers.email, 
        answers.officeNumber
      );

      //push manager's data to an empty array
      team.push(manager);
      console.log(team);

      // prompting to add more employees
      addTeamMembers();
  });
}

// function to add engineer employee when prompted by addTeamMembers() function
function addEngineer() {
  question = arrayQuestion("Engineer");
  inquirer
    .prompt([
      ...question,
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        validate(github) {
          if (!github) {
            return "Please enter a Github username";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      // create new Engineer object
      const engineer = new Engineer(
        answers.employeeId, 
        answers.name, 
        answers.email, 
        answers.github
      );
      //push engineer's data to an empty array
      team.push(engineer);
      console.log(team);

      // prompting to add more employees
      addTeamMembers();
    });
}

// function to add intern employee when prompted by addTeamMembers() function
function addIntern() {
  question = arrayQuestion("Intern");
  inquirer
    .prompt([
      ...question,
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        validate(school) {
          if (!school) {
            return "Please enter a valid school name";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      // create new Intern
      const intern = new Intern(
        answers.employeeId, 
        answers.name, 
        answers.email, 
        answers.school
      )
      //push intern's data to an empty array
      team.push(intern);
      console.log(team);

      // prompting to add more employees
      addTeamMembers();
    });
}

// function to add more team members of finish building team
function addTeamMembers() {
  
  inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "What type of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "No more team members..!"],
      },
    ])
    .then((val) => {
      switch (val.member) {
        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          generateHTML();
      }
    });
}

// generate data card for each employee
const generateHTML = () => {
  let dataHTML = "";

  team.forEach((employee) => {
    dataHTML += buildHTML(employee);
  });

  htmlData = buildBoilerPlate(dataHTML);
  writeToFile(fileName, htmlData);
}

// function to write to HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Generating index.html file...')
  );
}

// Function call to initialize app
init();


