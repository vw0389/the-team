const inquirer = require('inquirer');
const fs = require('fs');
const {Manager, Engineer, Intern} = require('./lib/employee');
const generateHtml = require('./src/generateHtml.js');
var currentlyAsking = 'team manager';


let team = {
    leader: null,
    engineers: [],
    interns: []
};
function getQuestions(role) {
    
    const questions = [{
        type: 'input',
        name: 'name',
        message: 'What is the ' + role + '\'s name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("\nEnter a name");
                return false;
            }

        }
    }, {
        type: 'input',
        name: 'id',
        message: 'What is the ' + role + '\'s id',
        validate: id => {
            if (id && !isNaN(id)) {
                return true;
            } else {
                console.log("\nEnter an id");
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'email',
        message: 'What is the ' + role + '\'s email',
        validate: email => {
            let re = /\S+@\S+\.\S+/;
            if (email && re.test(email)) {
                return true;
            } else {
                console.log("\nEnter a email");
                return false;
            }
        }
    }];

    const addRolesQuestion = [{
        type: 'list',
        name: 'addRole',
        message: 'Would you like to add another team member',
        choices: ['Engineer', 'Intern', new inquirer.Separator(), 'I don\'t want to add any more team members'],
    }];

    const managerQuestion = [{
        type: 'input',
        name: 'officeNumber',
        message: 'What is the ' + role + '\'s office number',
        validate: officeNumber => {
            if (officeNumber && !isNaN(officeNumber)) {
                return true;
            } else {
                console.log("\nEnter an office number");
                return false;
            }
        }
    }];
    const internQuestion = [{
        type: 'input',
        name: 'school',
        message: 'What is the ' + role + '\'s school',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("\nEnter a school");
                return false;
            }
        }

    }];
    const engineerQuestion = [{
        type: 'input',
        name: 'github',
        message: 'What is the ' + role + '\'s github',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("\nEnter a school");
                return false;
            }
        }
    }];
    let currentQuestions;
    if (role === 'team manager') {
        currentQuestions = questions.concat(managerQuestion, addRolesQuestion);
    } else if (role === 'Intern') {
        currentQuestions = questions.concat(internQuestion, addRolesQuestion);
        currentlyAsking = 'intern';
    } else if (role === 'Engineer') {
        currentQuestions = questions.concat(engineerQuestion, addRolesQuestion);
        currentlyAsking = 'engineer';
    } else {
        return;
    }
    return currentQuestions;

}
function question(role) {
    const currentQuestions = getQuestions(role);

    inquirer.prompt(currentQuestions).then((answers) => {
        
        if (role === 'team manager') {
            team.leader = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
        } else if (role === 'Intern') {
            team.interns.push(new Intern(answers.name, answers.email, answers.id, answers.school));
        } else {
            team.engineers.push(new Engineer(answers.name, answers.email, answers.id, answers.github));
        }
        if (answers.addRole !== 'I don\'t want to add any more team members') {
            question(answers.addRole);

        } else {
            let html = generateHtml(team);
            fs.writeFileSync('./dist/output.html',html);
        }
    });
}

function init() {
     const teams = question(currentlyAsking);
}

init();