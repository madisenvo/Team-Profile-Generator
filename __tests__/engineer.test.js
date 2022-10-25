const Engineer = require('../lib/engineer');

test('Tests engineer creation', () => {

    const engineer = new Engineer('Jane Doe', 1, 'jane@jane.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('Tests methods in engineer class', () => {

    const engineer = new Engineer('Jane Doe', 1, 'jane@jane.com');
    
    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe('Engineer');
});