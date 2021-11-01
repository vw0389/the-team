const inquirer = require('inquirer');
const {Employee,Manager, Engineer, Intern} = require('./lib/employee');

var currentlyAsking = 'team manager';

const questions = [{
    type:'input',
    name:'name',
    message:'What is ' + currentlyAsking+ '\'s name',
    validate: name => {
        if (name) {
            return true;
        } else {
            console.log("\nEnter a name");
            return false;
        }
        
    }
},{
    type:'input',
    name:'id',
    message:'What is ' + currentlyAsking+ '\'s id',
    validate: id => {
        if (id && !isNaN(id)) {
            return true;
        } else {
            console.log("\nEnter an id");
            return false;
        }
    }
},{
    type:'input',
    name:'email',
    message:'What is ' + currentlyAsking+ '\'s email',
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

const managerQuestion =[{
    type:'input',
    name:'officeNubmer',
    message:'What is the ' + currentlyAsking+ '\'s office number',
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
    type:'input',
    name:'school',
    message:'What is the' + currentlyAsking+ '\'s school',
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
    type:'input',
    name:'github',
    message:'What is the' + currentlyAsking+ '\'s github',
    validate: github => {
        if (github) {
            return true;
        } else {
            console.log("\nEnter a school");
            return false;
        }
    }
}];
let team = {
        leader:null,
        engineers:[],
        interns:[]
    };
function question(role) {
    console.log(role);
    let currentQuestions;
    if (role === 'team manager') {
        currentQuestions = questions.concat(managerQuestion,addRolesQuestion);
    } else if (role === 'Intern') {
        currentQuestions = questions.concat(internQuestion,addRolesQuestion);
        currentlyAsking = 'intern';
    } else if (role === 'Engineer') {
        currentQuestions  =questions.concat(engineerQuestion,addRolesQuestion);
        currentlyAsking = 'engineer';
    } else {
        return;
    }
    inquirer.prompt(currentQuestions).then((answers) => {
        console.log(answers);
        if (role ==='team manager') {
            team.leader = new Manager(answers.name,answers.email,answers.id,answers.officeNumber);
        } else if (role === 'Intern') {
            team.interns.push(new Intern(answers.name,answers.email,answers.id,answers.school));
        } else {
            team.engineers.push(new Intern(answers.name,answers.email,answers.id,answers.github));
        }
        if (answers.addRole !== 'I don\'t want to add any more team members') {
            question(answers.addRole);
        }
    });
}

function init() {
    question(currentlyAsking);
    
}

init();