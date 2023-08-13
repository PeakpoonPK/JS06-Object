// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น


// function calSalaries(object) {
//     if (isEmptyObj(object)) return 0;
//     let sum = 0;
//     for (let key in object) {
//         console.log(object[key]);
//         sum += object[key];
//     }
//     return sum;
// };
// let total = calSalaries(salaries);
// console.log(total);

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// };
// function CheckNumber(object) {
//     if (typeof (object)= Number){

//     }
// }

// function multiplyNumeric(obj, num) {
//     let multi = 0;
//     for (let key in obj) {
//         multi === (obj[key] * num);
//     }
//     return multi;
// }

// console.log(multiplyNumeric(menu, 3));

// ทำให object ทำการวนครบทุกรอบ
const multiplyNumeric = (object, num) => {
    for (let key in object) {
        // console.log(key);
        let value = object[key];
        if (typeof value === 'number') {
            // console.log(value, num);
            // object[key] = value * num or
            object[key] *= num;

        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
multiplyNumeric(menu, 3);
console.log(menu);

let menuObj = {
    width: 200,
};
menu.width = menuObj.width * 2;
menu['width'] = menuObj.width * 2;

let key = 'width';
menuObj[key] = menuObj[key] * 2;
