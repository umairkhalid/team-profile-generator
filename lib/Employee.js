class Employee {
    constructor (id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;