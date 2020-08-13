

const makeTeam = team => {

    const pushEmployee = employee => {
        return `
    <div class="col-3 align-self-center" id="cards">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2 class="card-title ">
                    ${employee.getName()}
                </h2>
                <h4 class="card-subtitle">
                    <i class='gas fa-wrench' style='color:white'> </i>
                    ${employee.getRole()}
                </h4>
            </div>

            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ID#: ${employee.getId()}
                    </li>
                    <li class="list-group-item">
                        Email: 
                        <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        Office Number: ${employee.getOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>
    </div>            
        `;
    }


    const pushEngineer = engineer => {
        return `
    <div class="col-3 align-self-center" id="cards">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2 class="card-title ">
                    ${engineer.getName()}
                </h2>
                <h4 class="card-subtitle">
                    <i class='fas fa-glasses' style='color:white'> </i>
                    ${engineer.getRole()}
                </h4>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ID#: ${engineer.getId()}
                </li>
                <li class="list-group-item"> 
                    Email: 
                    <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                </li>
                <li class="list-group-item">
                    GitHub: ${engineer.getGithub()}
                </li>
            </ul>
        </div>
    </div>            
        `;
    }

    const pushIntern = intern => {
        return `
    <div class="col-3 align-self-center" id="cards">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2 class="card-title ">
                    ${intern.getName()}
                </h2>
                <h4 class="card-subtitle">
                    <i class='fas fa-graduation-cap' style='color:white'> </i>
                    ${intern.getRole()}
                </h4>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ID#: ${intern.getId()}
                </li>
                <li class="list-group-item">
                    Email: 
                    <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                </li>
                <li class="list-group-item">
                    School: ${intern.getSchool()}
                </li>
            </ul>
        </div>
    </div>           
        `;
    }

    const pushManager = manager => {
        return `
    <div class="col-3 align-self-center" id="cards">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2 class="card-title ">
                    ${manager.getName()}
                </h2>
                <h4 class="card-subtitle">
                    <i class='fas fa-mug-hot' style='color:white'> </i>
                    ${manager.getRole()}
                </h4>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ID#: ${manager.getId()}
                </li>
                <li class="list-group-item">
                    Email: 
                    <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                </li>
                <li class="list-group-item">
                    Office Number: ${manager.getOfficeNumber()}
                </li>
            </ul>
        </div>    
    </div>            
       `;
    };

    const myTeam = [];

    myTeam.push(
        team
            .filter(employee => employee.getRole() === "Employee")
            .map(employee => pushEmployee(employee))
            .join(" ")
    );

    myTeam.push(
        team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => pushEngineer(engineer))
            .join(" ")
    );

    myTeam.push(
        team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => pushIntern(intern))
            .join(" ")
    );

    myTeam.push(
        team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => pushManager(manager))
            .join(" ")
    );
    return myTeam.join(" ");
};

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <div class="jumbotron bg-danger">
            <div class="container">
                <h1 class="text-light text-center">My Team:</h2>
            </div>
        </div>

    </header>

    <main>
        <div class="container">

            <div class="row">
                ${makeTeam(team)}
            </div>
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>

</body>

</html>
    `;
};