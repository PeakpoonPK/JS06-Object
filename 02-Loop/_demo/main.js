const user = {
    firstName: 'CadeCamp',
    lastName: 'Software Park',
    age: 15,
};
//For IN : Loop through Object
//for (let <key_variable> in <obj>) {}
for (let key in user) {
    //let key ="firstName"
    //let key ="lastName"
    //let key ='age'
    console.log(key); //auto dynamics assign by JS in <string>
    //1st : let key ="firstName"
    //2nd: let key ="lastname"
    //3rd: let key ='age'
    console.log(user[key]);//need to access by bracket , computed key
 //1st : let key ="firstName"
    //2nd: let key ="lastname"
    //3rd: let key ='age'
    // ######ไปลอกนะ
//