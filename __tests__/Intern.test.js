const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

//added role and github checks
test("create new intern test", () => {
    const intern = new Intern("Chris", 1955, "christuxp@gmail.com", "UC Santa Cruz");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining("@"));
})

test("checks on unique -role- and -school-", () => {
    const intern = new Intern("Chris", 1955, "christuxp@gmail.com", "UC Santa Cruz");

    expect(intern.getRole()).toEqual("Intern");
    expect(intern.school).toEqual("UC Santa Cruz");
    expect(intern.school).toEqual(expect.any(String));
})