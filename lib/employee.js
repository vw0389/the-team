class Employee {
    constructor(name,email,id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee";
    }
}
class Manager extends Employee {
    constructor (name,email,id,officeNumber) {
        super(name,email,id);
        this.officeNumber = officeNumber;
    }
    // override
    getRole() {
        return "Manager";
    }
}
class Engineer extends Employee {
    constructor (name,email,id,github) {
        super(name,email,id);
        this.github = github;
    }
    // override
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
class Intern extends Employee {
    constructor (name,email,id,school) {
        super(name,email,id);
        this.school = school;
    }
    // override
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = {Employee, Manager, Engineer, Intern};