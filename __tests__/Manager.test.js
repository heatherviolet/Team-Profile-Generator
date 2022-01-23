const Manager = require('../lib/Manager.js');

test('gets name of manager', () => {
    const manager = new Manager('Heather', '120', 'email@email.com', 'office');

    expect(manager.name).toEqual('Heather');
});

test('gets id of manager', () => {
    const manager = new Manager('Heather', '120', 'email@email.com', 'office');

    expect(manager.id).toEqual('120');
});

test('gets email of manager', () => {
    const manager = new Manager('Heather', '120', 'email@email.com', 'office');

    expect(manager.email).toEqual('email@email.com');
});

test('gets office of manager', () => {
    const manager = new Manager('Heather', '120', 'email@email.com', 'office');

    expect(manager.office).toEqual('office');
});