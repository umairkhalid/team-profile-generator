const Manager = require('../lib/Manager');

describe("Manager class", () => {
    describe('Initialization', () => {
        it("Should get the employee from the method getRole()", () => {
            const e = new Manager();

            expect(e.getRole()).toEqual("Manager");
        })
    })
})