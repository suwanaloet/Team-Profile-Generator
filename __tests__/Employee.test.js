const Employee = require('../lib/Employee');

//to see if name id and email get pushed
test("create new employee test", () => {
    const employee = new Employee("Sean", 31415926, "suwanaloet@wisc.edu");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
})

//didn't quite know where to go with testing, so did a mimic of the enemy calls from jest-another-RPG project, though these do work
//name check
test("name string check and existence test", () => {
    const employee = new Employee("Sean", 31415926, "suwanaloet@wisc.edu");
 
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})


//id check
test("id number check", () => {
    const employee = new Employee("Sean", 31415926, "suwanaloet@wisc.edu");

    expect(employee.id).toEqual(expect.any(Number));
})


//email check
test("email @ check and existence test", () => {
    const employee = new Employee("Sean", 31415926, "suwanaloet@wisc.edu");

    expect(employee.email).toEqual(expect.stringContaining("@"));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})