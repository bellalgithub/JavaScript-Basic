

let num1 = 200;
let num2 = 300;

console.log(num1 + num2);

// Output: 500 (Number)

let num3 = '200';
let num4 = 300;
console.log(num3 + num4);

// Output: 200300 (String)

let num5 = '200';
num5 = parseInt(num5);
let num6 = 300;
console.log(num5 + num6);

// Output: 500 (Number)

let num7 = '200.5';
num7 = parseInt(num7);
let num8 = 300;
console.log(num7 + num8);

// Output: 500(Number)

let num9 = '200.5';
num9 = parseFloat(num9);
let num10 = 300;
console.log(num9 + num10);

// Output: 500.5 (Number float)

let num11 = 200.5;
num11 = '' + num11;    // Number to String Conversion
let num12 = 300;
console.log(num11 + num12);

// Output: 200.5300 (String)


let price1 = 0.1;
let price2 = 0.2;
let total = price1 + price2;
console.log(total);

// Output: 0.30000000000000004 

let price3 = 0.1;
let price4 = 0.2;
let total1 = price3 + price4;
console.log(total.toFixed(4));

// Output : 0.3000 (4 digit after decimal)








