// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)


// sub P1 Input
let name = prompt('Enter Product Name')
let quantity = +prompt('Enter Quatity');
let price = +prompt('Enter Price');
let discount = prompt('Enter Discount') * 0.01;

// sub P2 CreateObject;
// const product = {
//     name: name, //name : 'Hermes'
//     quantity: quantity, // quantity:10
//     price: price, // price : 500_000
//     discount: discount, // discount :0.1 
// };
//เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ Syntax (Property shorthand)
const products = {
    name,
    quantity,
    price,

};
if (discount != 0) {
    products['discount'] = discount;
}
console.log(products);

//sub P3 :calculate Price;

//price,quantity,discount => TotalPrice
// function calcPrice(price, quantity, discount = 0) {
//     let totalPrice = price * quantity * (1 - discount);
//     return totalPrice;
// }

// let result = calcPrice(products.price, products.quantity, products.discount);
// log(result);

function calcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount : 0;
    return price * quantity * (1 - discount);
}

let result = calcPrice(products);
console.log(result);
