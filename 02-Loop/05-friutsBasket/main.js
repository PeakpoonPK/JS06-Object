// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย



const fruits = {};
let key = prompt('Enter Fruit')
let value = +prompt('Entert Quality');

/* UPDATE FRUITES
fruits.key = value; // {apple:10}
fruits[key]= value;
*/
if (value == 1) {
    fruits[key] = value;
}
else if (value > 1) {
    fruits[`${key}s`] = value;
}
// fruite[key] = value;
console.log(fruits);
