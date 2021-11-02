const { TestWatcher } = require('@jest/core');
const { Employee, Manager, Engineer, Intern } = require('../lib/employee');

test('creates Employee object, tests it for consistency', () => {
    const employee = new Employee("Victor", "dev@vweinert.com", 25);
    // Test methods
    expect(employee.getName()).toEqual('Victor');
    expect(employee.getEmail()).toEqual('dev@vweinert.com');
    expect(employee.getId()).toEqual(25);
    expect(employee.getRole()).toEqual("Employee");
    // Test values
    expect(employee.name).toEqual('Victor');
    expect(employee.email).toEqual('dev@vweinert.com');
    expect(employee.id).toEqual(25);
})
test('creates Manager object, tests it for consistency', () => {
    const employee = new Manager("Victor", "dev@vweinert.com", 25, 2);
    // Test methods
    expect(employee.getName()).toEqual('Victor');
    expect(employee.getEmail()).toEqual('dev@vweinert.com');
    expect(employee.getId()).toEqual(25);
    expect(employee.getRole()).toEqual("Manager");
    // Test values
    expect(employee.name).toEqual('Victor');
    expect(employee.email).toEqual('dev@vweinert.com');
    expect(employee.id).toEqual(25);
    expect(employee.officeNumber).toEqual(2);
})
test('creates Engineer object, tests it for consistency', () => {
    const employee = new Engineer("Victor", "dev@vweinert.com", 25, "vw0389");
    // Test methods
    expect(employee.getName()).toEqual('Victor');
    expect(employee.getEmail()).toEqual('dev@vweinert.com');
    expect(employee.getId()).toEqual(25);
    expect(employee.getRole()).toEqual("Engineer");
    expect(employee.getGithub()).toEqual("vw0389");
    // Test values
    expect(employee.name).toEqual('Victor');
    expect(employee.email).toEqual('dev@vweinert.com');
    expect(employee.id).toEqual(25);
    expect(employee.github).toEqual('vw0389');
})
test('creates Intern object, tests it for consistency', () => {
    const employee = new Intern("Victor", "dev@vweinert.com", 25, "uofw");
    // Test methods
    expect(employee.getName()).toEqual('Victor');
    expect(employee.getEmail()).toEqual('dev@vweinert.com');
    expect(employee.getId()).toEqual(25);
    expect(employee.getRole()).toEqual("Intern");
    expect(employee.getSchool()).toEqual("uofw");
    // Test values
    expect(employee.name).toEqual('Victor');
    expect(employee.email).toEqual('dev@vweinert.com');
    expect(employee.id).toEqual(25);
    expect(employee.school).toEqual("uofw");
})