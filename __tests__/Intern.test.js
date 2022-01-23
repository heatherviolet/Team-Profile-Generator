const Intern = require('../lib/Intern.js');

test('gets name of intern', () => {
    const intern = new Intern('Heather', '120', 'email@email.com', 'school');

    expect(intern.name).toEqual('Heather');
});

test('gets id of intern', () => {
    const intern = new Intern('Heather', '120', 'email@email.com', 'school');

    expect(intern.id).toEqual('120');
});

test('gets email of intern', () => {
    const intern = new Intern('Heather', '120', 'email@email.com', 'school');

    expect(intern.email).toEqual('email@email.com');
});

test('gets school of intern', () => {
    const intern = new Intern('Heather', '120', 'email@email.com', 'school');

    expect(intern.school).toEqual('school');
});