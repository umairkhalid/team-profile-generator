// General questions to build a team
function arrayQuestion(role) {
    return [
      {
        type: "input",
        name: "name",
        message: `What's the name of the ${role}?`,
        validate(input) {
          const validInput = /^\d*$/gi;
          if (!input || input === "") {
            return "Invalid input!";
          } else if (validInput.test(input)) {
            return "Input must be a string value!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: `What's the employee ID of the ${role}?`,
        validate(employeeId) {
          const validID = /[1-9]/gi;
          if (!validID.test(employeeId)) {
            return "Invalid Number!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: `What's the Email address for ${role}?`,
        validate(email) {
            const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!validEmail.test(email)) {
                return "Please enter a valid Email address.";
            } else if (!email) {
                return "Invalid Input!";
            }
            return true;
        },
      },
    ];
  }
  
  module.exports = arrayQuestion;
  