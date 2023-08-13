console.log('learn object');
/*DataTypes
- Primitive: Boolean, Number,string,etc..
- Non-primitive : Object
##########
###Object Declaration
###########
{} == stand for Object /Scope
{record_1, record_2, record_3,...}
each record => <key_name>:<value>
<value> any Datatype
<key_name> datatype :string
record === property (คุณสมบัติหรือสิ่งืั้มี)
*/

let user = {
    firstName: 'Pavit',
    lastName: 'Pimchanangul',
    age: 18,
    isAdmin: true,
    'like human': true,
};

console.log(user);

/* ##########
###Object Declaration
#############
Every action NEED <key_name>!!
Dot Notation
<obj>.<key_name> === <value>
ถ้าไม่มี record => return undefined
ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้
*/
// GET,POll,READ
console.log(user);
console.log(user.firstName === 'Pavit');
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.salary);
// console.log(user.like human)

//Modify,update
//Syntax : <obj>.<key_name> = newValue
user.firstName = 'Pravit';
user.age = 25;
user.age += 2;
user.age++;
// console.log(user.age);

//ADD
// Syntax:<obj>.<new_key>= newValue
user.addreess = 'bangkok';
//console.log(user);

//Delete
//Syntax: delate <obj>.<key_name>

delete user.isAdmin;
console.log(user);

/* ##########
###NESTED object
#############

*/

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },
}

console.log(employee.salary);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

employee.address.province = 'Nonthaburian';
delete employee.address.country;

//Dot ใช้กับ object เท่านั้น !!
//ห้ามมมมมมมมมมมม ใช้กับ undifined.<key>
//วิธีแก้ optional chaining =><undefied>?. <key>

console.log(employee.addr);//undefined;
// console.log(employee.addr.province);// undefined.province;
console.log(employee.addr?.province);// undefined.province;
console.log(employee.address.province);// undefined.province;
console.log(employee.address.village);// undefined.province;


/* ##########
###4. Check key?
#############

*/
const product = {
    id: 227,
    name: "Iphone",
    price: 50_000,
    discount: 0.05,
    //discount: 0.05,
};
console.log(product.discount);//undefiend
//In operator
// Syntax: <key_name_string> in<obj>
// 'name' in product // => true,false
console.log('name' in product);
console.log('discount' in product);

//method hasOwnProperty
//Syntax : <obj>. hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));



/* ##########
###4. Bracket Notation[]
#############
******* 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
********2 ถ้าไม่ใช่ string ต้องเป็ฯตัวแปรที่เก็บ string
Access key-value ผ่านชื่อตัวแปรได้

*/
console.log(product.id);
console.log(product['id']);
//console.log(product.is mobile) cash
console.log(product['is mobile'])
product['name'] = 'Iphone-15';
// console.log(product);

let aaaa = "name";
console.log(product[aaaa]);
console.log(product['name']);
console.log(product.aaaa);
