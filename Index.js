const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/HTMLTemplate.js');


//team data array
const team = [];

function formTeam() {

    const addMembers = function () {
        inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Add members to your team!(required)",
                choices: ["Manager", "Engineer", "Intern", "Other Employee", "**Done entering team members**"],
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
        ]).then((answers) => {
            const { role } = answers;
            if (role === "Manager") {
                promptManager()
            } else if (role === "Engineer") {
                promptEngineer()
            } else if (role === "Intern") {
                promptIntern()
            } else if (role === "Other Employee") {
                promptOtherEmployee()
            } else if (role === "**Done entering team members**") {
                writeFile()
            }
        })
    }

    const promptManager = function () {
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "Please enter the name of your team manager (required)",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("^[A-Za-z0-9- ]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter your team manager's name.";
                    }
                }
            },

            {
                type: "input",
                name: "managerId",
                message: "Please enter your team manager's employee ID number (required)",
                validate: answer => {
                    //regex number check
                    if (answer.match("^[0-9]*$")) {
                        return true;
                    } else {
                        return "Please check and re-enter your team manager's employee ID number.";
                    }
                }
            },

            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your team manager's email address (required).",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("[a-zA-Z@]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter your team manager's email address.";
                    }
                }
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter your team manager's office phone number.",
                validate: answer => {
                    //tried other regex formulas found online but all returned "invalid regular expression: ' ' : invalid group"
                    if (answer.match("^[0-9]*$")) {
                        return true;
                    } else {
                        return "Please check and re-enter your team manager's office phone number.";
                    }
                }
            },
        ]).then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            addMembers();
        })
    }

    const promptEngineer = function () {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "Please enter this engineer's name (required)",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("^[A-Za-z0-9- ]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this engineer's name.";
                    }
                }
            },

            {
                type: "input",
                name: "engineerId",
                message: "Please enter this engineer's employee ID number (required)",
                validate: answer => {
                    //regex number check
                    if (answer.match("[1-9]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this engineer's employee ID number.";
                    }
                }
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter this engineer's email address (required).",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("[a-zA-Z@]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this engineer's email address.";
                    }
                }
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter this engineer's github username (required).",
                validate: answer => {
                    //regex for letters and numbers- from regextester.com
                    if (answer.match("^[a-zA-Z0-9]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this engineer's github username.";
                    }
                }
            },
        ]).then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            addMembers();
        })
    }

    const promptIntern = function () {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "Please enter this intern's name (required)",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("^[A-Za-z0-9- ]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this intern's name.";
                    }
                }
            },

            {
                type: "input",
                name: "internId",
                message: "Please enter this intern's employee ID number (required)",
                validate: answer => {
                    //regex number check
                    if (answer.match("[1-9]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this intern's employee ID number.";
                    }
                }
            },

            {
                type: "input",
                name: "internEmail",
                message: "Please enter this intern's email address (required).",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("[a-zA-Z@]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this intern's email address.";
                    }
                }
            },

            {
                type: "input",
                name: "internSchool",
                message: "Please enter this intern's current school (required).",
                validate: answer => {
                    //regex for letters and numbers
                    if (answer.match("^[A-Za-z0-9- ]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this intern's school name.";
                    }
                }
            },
        ]).then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            team.push(intern);
            addMembers();
        })
    }

    const promptOtherEmployee = function () {
        inquirer.prompt([

            {
                type: "input",
                name: "employeeName",
                message: "Please enter this employee's name (required)",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("^[A-Za-z0-9- ]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this employee's name.";
                    }
                }
            },

            {
                type: "input",
                name: "employeeId",
                message: "Please enter this employee's employee ID number (required)",
                validate: answer => {
                    //regex number check
                    if (answer.match("[1-9]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this employee's employee ID number.";
                    }
                }
            },

            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter this employee's email address (required).",
                validate: answer => {
                    //regex a-z string check
                    if (answer.match("[a-zA-Z@]+$")) {
                        return true;
                    } else {
                        return "Please check and re-enter this employee's email address.";
                    }
                }
            },


        ]).then((answers) => {
            const employee = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);
            team.push(employee);
            addMembers();
        })
    }

    function writeFile() {
        fs.writeFile('./dist/index.html', generateHTML(team), err => {
            if (err) {
                reject(err);
                return;
            }
            console.log('index.html created!');
        });
      }
    
    addMembers();
};


formTeam();