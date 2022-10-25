const Employee = require('../lib/Employee');

test('Tests employee creation', () => {

    const employee = new Employee('Jane Doe', 1, 'jane@jane.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Tests methods in employee class', () => {

    const employee = new Employee('Jane Doe', 1, 'jane@jane.com');
    
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
});