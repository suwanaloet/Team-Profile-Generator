const Employee = require('../lib/Employee');
const Manager = require('../lib/manager');

//added role and github checks
test("create new manager test", () => {
    const manager = new Manager("Eric", 1996, "feilongguan@gmail.com", 5551941985);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("@"));
})

test("checks on unique -role- and -officeNumber-", () => {
    const manager = new Manager("Eric", 1996, "feilongguan@gmail.com", 5551941985);

    expect(manager.getRole()).toEqual("Manager");
    expect(manager.officeNumber).toEqual(5551941985);
    expect(manager.officeNumber).toEqual(expect.any(Number));
})