const Manager = require('../lib/manager');

test('Tests manager creation', () => {

    const manager = new Manager('Jane Doe', 1, 'jane@jane.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('Tests methods in manager class', () => {

    const manager = new Manager('Jane Doe', 1, 'jane@jane.com');
    
    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe('Manager');
});