const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Should retrieve the github name from the method", () => {
        const e = new Engineer(66, "Umair Khalid", "umairkhalid@fastmail.fm", "umairkhalid");
        
        expect(e.getGithub()).toEqual(expect.stringContaining(e.github.toString()));
    });

    it("Should get the employee from the method getRole()", () => {
        const e = new Engineer();

        expect(e.getRole()).toEqual("Engineer");
    })


})