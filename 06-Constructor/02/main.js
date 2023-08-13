// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumalator(startingValue) {
    this.currntvalue = null;
    this.x = null;
    this.read = function () {
        this.x = + prompt('Enter Number');
        this.currntvalue += this.x;
    }
    this.show = function () {
        alert(this.currntvalue);
    }
}


let accumalator = new Accumalator();

accumalator.read();
accumalator.show();
