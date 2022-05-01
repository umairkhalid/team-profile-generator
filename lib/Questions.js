// General questions to build a team
function arrayQuestion(role) {
    return [
      {
        type: "input",
        name: "name",
        message: `What's the name of the ${role}?`,
        validate(input) {
          if (!input || input === "") {
            return "Invalid input!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "empId",
        message: `What's the employee ID of the ${role}?`,
        validate(id) {
          if (!/[1-9]/gi.test(id)) {
            return "Invalid Number!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: `What's the Email address for ${role}?`,
        validate(emailInput) {
            if (emailInput.includes("/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g")) {
                return "Please enter a valid Email address.";
            } else if (!emailInput) {
                return "Invalid Input!";
            }
            return true;
        },
      },
    ];
  }
  
  module.exports = arrayQuestion;
  