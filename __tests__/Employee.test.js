const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Heather', '120', 'email@email.com');

    expect(employee.name).toEqual('Heather');
    expect(employee.id).toEqual('120');
    expect(employee.email).toEqual('email@email.com');
});

