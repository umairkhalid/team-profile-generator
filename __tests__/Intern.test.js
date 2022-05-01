const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Should retrieve the school name from the method", () => {
        const e = new Intern(44, "Rob", "rob@gmail.com", "UNSW");

        expect(e.getSchool()).toEqual(expect.stringContaining(e.school.toString()));
    });

    it("Should get the employee from the method getRole()", () => {
        const e = new Intern();

        expect(e.getRole()).toEqual("Intern");
    })


})