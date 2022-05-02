class Employee {
    constructor (id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = this.getRole();
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;