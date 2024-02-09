// Function to generate the team HTML
const generateTeam = (team) => {
    // Check if team is an array
    if (!Array.isArray(team)) {
        console.error("Error: 'team' is not an array.");
        return "";
    }

    const html = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <!-- Metadata -->
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Software Engineering Team</title>

            <!-- Stylesheets -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>

            <!-- Font -->
            <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500&display=swap" rel="stylesheet">

            <!-- Favicon -->
            <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
            <link rel="manifest" href="favicon_io/site.webmanifest">

            <!-- Custom Styles -->
            <style>
                body {
                    font-family: 'Work Sans', Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    background-color: #f2f2f2;
                }
        
                header {
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 20px 0;
                }
        
                main {
                    padding: 20px;
                }
        
                .team-heading {
                    background: linear-gradient(to right, #ff4d4d, #ff6666);
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    color: white;
                }
        
                .card {
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    background-color: #fff;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
        
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                }
        
                .card-header {
                    background-color: #007bff;
                    color: #fff;
                    padding: 10px;
                    border-bottom: 1px solid #ccc;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
        
                .card-title {
                    margin: 0;
                }
        
                .card-body {
                    padding: 10px;
                }
        
                .list-group {
                    padding: 0;
                    list-style: none;
                }
        
                .list-group-item {
                    padding: 5px 0;
                }
        
                .list-group-item:first-child {
                    padding-top: 0;
                }
        
                .list-group-item:last-child {
                    padding-bottom: 0;
                }
        
                .card-deck {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
        
                .employee-card {
                    margin: 10px;
                    max-width: 300px;
                }
        
                .employee-card:hover {
                    transform: scale(1.1);
                }
            </style>
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">Our Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="team-area card-deck justify-content-center">
                    ${team.map(employee => generateEmployeeCard(employee)).join('')}
                </div>
            </div>
        </body>

        </html>
    `;

    return html;
};

// Function to generate HTML for individual employee card
const generateEmployeeCard = (employee) => {
    return `
        <div class="card w-33 employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="${getIconClass(employee)} mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${getAdditionalInfo(employee)}
                </ul>
            </div>
        </div>
    `;
};

// Function to get additional info based on employee type
const getAdditionalInfo = (employee) => {
    if (employee.getRole() === 'Manager') {
        return `<li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>`;
    } else if (employee.getRole() === 'Engineer') {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a></li>`;
    } else if (employee.getRole() === 'Intern') {
        return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
    }
};

// Function to get icon class based on employee type
const getIconClass = (employee) => {
    if (employee.getRole() === 'Manager') {
        return 'fas fa-mug-hot';
    } else if (employee.getRole() === 'Engineer') {
        return 'fas fa-glasses';
    } else if (employee.getRole() === 'Intern') {
        return 'fas fa-user-graduate';
    }
};

// Export function to generate entire page
module.exports = generateTeam;
