const Engineer = require('../lib/Engineer.js');

test('gets name of engineer', () => {
    const engineer = new Engineer('Heather', 'R120', 'email@email.com', 'githubusername');

    expect(engineer.name).toEqual('Heather');
});

test('gets id of engineer', () => {
    const engineer = new Engineer('Heather', 'R120', 'email@email.com', 'githubusername');

    expect(engineer.id).toEqual('R120');
});

test('gets email of engineer', () => {
    const engineer = new Engineer('Heather', 'R120', 'email@email.com', 'githubusername');

    expect(engineer.email).toEqual('email@email.com');
});

test('gets github username of engineer', () => {
    const engineer = new Engineer('Heather', 'R120', 'email@email.com', 'githubusername');

    expect(engineer.github).toEqual('githubusername');
});