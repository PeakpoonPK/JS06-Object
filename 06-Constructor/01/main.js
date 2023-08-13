// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง


function Calculator() {
    this.x = null;
    this.y = null;
    this.read = function () {
        this.x = + prompt('Number1');
        this.y = +prompt('Number2');
    }
    this.sum = function () {
        return this.x + this.y;
    }
    this.mul = function () {
        return this.x * this.y;
    }
}


let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// let calculator = {
//     x: null,
//     y: null,
//     read() {
//         this.x = +prompt('Number1');
//         this.y = +prompt('Number2');
//     },
//     sum() { return this.x + this.y; },
//     mul() { return this.x * this.y; },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());