const Intern = require('../lib/intern');

test('Tests intern creation', () => {

    const intern = new Intern('Jane Doe', 1, 'jane@jane.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test('Tests methods in intern class', () => {

    const intern = new Intern('Jane Doe', 1, 'jane@jane.com');
    
    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
});