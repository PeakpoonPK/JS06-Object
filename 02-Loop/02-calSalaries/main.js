// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function isEmptyObj(obj) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    }
}

function calSalaries(object) {
    if (isEmptyObj(object)) return 0;
    let sum = 0;
    for (let key in object) {
        console.log(object[key]);
        sum += object[key];
    }
    return sum;
};
let total = calSalaries(salaries);
console.log(total);
