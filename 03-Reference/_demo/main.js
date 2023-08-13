const log = console.log;
log('learn Ref.');

//copied by value
//copied by Reference

//Primitive
let message = 'Hello';
let word = message;
log(message);
log(word);

message = 'Hi';
log(message);
log(word);

//Object
let user = {
    name: 'John',
};
// Copy
// let employee = user;

// user.name = 'Jane';
// log(user.name);
// employee.name = 'Joe';
// log(employee.name);

let employee = user;
log(employee);

user.name = 'Joe';
log(user);
log(employee);

//Object
let user = {
    name: 'John',
    age: 33,
};



