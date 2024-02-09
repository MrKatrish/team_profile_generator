const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template.js");
const path = require("path");
const fs = require("fs");

// Function to gather information about the development team members
function gatherTeamInformation() {
    // Array to store team members
    const teamMembers = [];

    // Function to prompt user for manager's information
    function promptManager() {
        console.log("Please enter the manager's information:");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name:"
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Office number:"
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptTeamMember();
        });
    }

    // Function to prompt user for team member's information (Engineer or Intern)
    function promptTeamMember() {
        console.log("Please choose the type of team member to add or finish building the team:");
        inquirer.prompt([
            {
                type: "list",
                name: "memberType",
                message: "Choose team member type:",
                choices: ["Engineer", "Intern", "Finish building the team"]
            }
        ]).then(answer => {
            if (answer.memberType === "Engineer") {
                promptEngineer();
            } else if (answer.memberType === "Intern") {
                promptIntern();
            } else {
                generateTeamHTML();
            }
        });
    }

    // Function to prompt user for engineer's information
    function promptEngineer() {
        console.log("Please enter the engineer's information:");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name:"
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "github",
                message: "GitHub username:"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            promptTeamMember();
        });
    }

    // Function to prompt user for intern's information
    function promptIntern() {
        console.log("Please enter the intern's information:");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name:"
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Email address:"
            },
            {
                type: "input",
                name: "school",
                message: "School:"
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            promptTeamMember();
        });
    }

    // Function to generate HTML file with team information
    function generateTeamHTML() {
        const htmlContent = render(teamMembers);
        // Ensure the output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        // Write HTML content to file
        fs.writeFileSync(outputPath, htmlContent);
        console.log(`Team HTML file generated successfully at ${outputPath}`);
    }

    // Start by prompting for manager's information
    promptManager();
}

// Call function to gather team information
gatherTeamInformation();
