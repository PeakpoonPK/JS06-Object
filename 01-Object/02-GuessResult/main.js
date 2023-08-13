
const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user); // Object
user = {};
console.log(user); // **Error


