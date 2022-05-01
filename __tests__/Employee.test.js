const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Initialization', () => {
        it('Should instantiate Employee properties', () => {
            const employee = new Employee(66, "Umair", "umairkhalid@fastmail.fm");
            expect(typeof employee.id).toBeTruthy();
            expect(typeof employee.name).toBe("string");
            expect(typeof employee.email).toBe("string");
        });

        it("should create an object with a id, name and email if provided valid arguments", () => {
            const employee = new Employee();

            employee.getName("Umair Khalid");
            employee.getId(1);
            employee.getEmail("umairkhalid@fastmail.fm");
        });

    });

    describe('getId', () => {
		it("Should return a valid number for an ID", () => {
			const id = 44;
			const employee = new Employee(id, 'Rob', 'rob@gmail.com');
			const result = employee.getId();

			expect(result).toBe(id);
		});
	});

	describe('getEmail', () => {
		it("Should return a valid email address", () => {
			const email = 'rob@gmail.com';
			const employee = new Employee(44, 'Rob', email);
			const result = employee.getEmail();

			expect(result).toEqual(email);
		});
	});

	describe('getRole', () => {
		it("Should get the employee from the method getRole()", () => {
			const role = 'Employee';
			const employee = new Employee();
			const result = employee.getRole();

			expect(result).toBe(role);
		});
	});

});