//didn't know if i needed Employee or if would be called in the other script file but have it here just in case
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

//added role and github checks
test("create new engineer test", () => {
    const engineer = new Engineer("Andy", 10261997, "andrew.spacex@gmail.com", "andrewgithub");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("@"));
})

test("checks on unique -role- and -github-", () => {
    const engineer = new Engineer("Andy", 10261997, "andrew.spacex@gmail.com", "andrewgithub");

    //turns out capitalization mattered for getRole() call
    expect(engineer.getRole()).toEqual("Engineer")
    expect(engineer.github).toEqual(expect.any(String));
})