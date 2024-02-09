// Importing modules
import('inquirer').then(({ default: inquirer }) => {
    const Manager = require("./lib/Manager");
    const Engineer = require("./lib/Engineer");
    const Intern = require("./lib/Intern");
    const path = require("path");
    const fs = require("fs");
    const render = require("./src/page-template.js");

    const OUTPUT_DIR = path.resolve(__dirname, "output");
    const outputPath = path.join(OUTPUT_DIR, "team.html");

    // Definitions of questions for manager, employee confirmation, and employee type (Engineer or Intern)
    const managerQuestions = [
        {
            type: 'input',
            message: "Please enter the manager's name:",
            name: 'mgrName',
            default: 'John Doe',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid name is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the manager's employee ID:",
            name: 'mgrId',
            default: 'M001',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid employee ID is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the manager's email address:",
            name: 'mgrEmail',
            default: 'manager@example.com',
            validate: function (answer) {
                if (!answer.includes('@')) {
                    return "A valid email address is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the manager's office number:",
            name: 'mgrOffice',
            default: '100',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid office number is required.";
                }
                return true;
            }
        },
    ];
    
    // Confirmation to Add Another Employee
    const confirmEmployee = [
        {
            type: 'confirm',
            message: "Would you like to add another team member?",
            name: 'confirmEmp',
            default: true
        }
    ];
    
    // Employee Type Selection
    const employeeType = [
        {
            type: 'list',
            message: "Would you like to add an Engineer or Intern to the team?",
            choices: ['Engineer', 'Intern'],
            name: 'empRole'
        }
    ];
    
    // Engineer Questions
    const engineerQuestions = [
        {
            type: 'input',
            message: "Please enter the engineer's name:",
            name: 'engName',
            default: 'Jane Smith',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid name is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the engineer's employee ID:",
            name: 'engId',
            default: 'E001',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid employee ID is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the engineer's email address:",
            name: 'engEmail',
            default: 'engineer@example.com',
            validate: function (answer) {
                if (!answer.includes('@')) {
                    return "A valid email address is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the engineer's GitHub username:",
            name: 'engGithub',
            default: 'githubuser',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid GitHub username is required.";
                }
                return true;
            }
        }
    ];
    
    // Intern Questions
    const internQuestions = [
        {
            type: 'input',
            message: "Please enter the intern's name:",
            name: 'internName',
            default: 'Alex Johnson',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid name is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the intern's employee ID:",
            name: 'internId',
            default: 'I001',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid employee ID is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the intern's email address:",
            name: 'internEmail',
            default: 'intern@example.com',
            validate: function (answer) {
                if (!answer.includes('@')) {
                    return "A valid email address is required.";
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the intern's school name:",
            name: 'internSchool',
            default: 'University of ABC',
            validate: function (answer) {
                if (answer.length < 1) {
                    return "A valid school name is required.";
                }
                return true;
            }
        }
    ];

    // Start the process
    function start() {
        console.log("Please enter the manager's information:");
        inquirer.prompt(managerQuestions)
            .then(answers => {
                // Here you can process the answers further
                gatherTeamInformation();
            })
            .catch(error => {
                console.error('Error occurred while prompting manager:', error);
            });
    }

    start(); // Start the process

}).catch((error) => {
    console.error('Error loading inquirer:', error);
});