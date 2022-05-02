# Team Profile Generator

![HTML](https://img.shields.io/badge/-HTML-red) ![CSS](https://img.shields.io/badge/-CSS-blue) ![JS](https://img.shields.io/badge/-JS-yellow) ![Node](https://img.shields.io/badge/-Node-brightgreen)
![JEST](https://img.shields.io/badge/-JEST-darkred) ![Inquirer](https://img.shields.io/badge/-Inquirer-pink)

![Github licence](https://img.shields.io/badge/license-MIT-blue)


## Description

It is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so it incorporates number of unit tests for every part of the code and ensure that it passes each test.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Walkthrough Video (Tests):

https://drive.google.com/file/d/1cjHKDrB8p9ZQePltYlSG8HlY0o6l_uRt/view

## Walkthrough Video:

![portfolio walkthrough](./dist/walkthrough.mp4)

## Application Demo:

![portfolio demo](./dist/demo.gif)

## Table-of-Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## [Installation](#table-of-contents)
To install necessary dependencies, run the following command:

```
npm i inquirer jest fs
```

## [Usage](#table-of-contents)
This project was built in Node.js using the [JEST](), [Inquirer]() and [fs]() package and runs on the command line.

## [License](#table-of-contents)
The application is covered under the following license: [MIT](https://choosealicense.com/licenses/mit/)

## [Tests](#table-of-contents)
To run tests, run the following command:

```
npm run test
```

## [Questions](#table-of-contents)
If you have any question about the repo, open an issue or contact me directly at [Email: umairkhalid@fastmail.fm](mailto:umairkhalid@fastmail.fm).
You can find more of my work at [GitHub](https://github.com/umairkhalid).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
