let score = "33";
console.log(typeof score); // or console.log(typeof(score));

console.log("   ");

let valueInNumer = Number(score);
console.log(typeof valueInNumer);

console.log("   ");

let newScore = "33abc";
console.log(typeof Number(newScore));
console.log(newScore);

console.log("   ");

let a = null;
console.log(typeof Number(a));
console.log(Number(a));
console.log(a);

console.log("   ");

let b = undefined;
console.log(typeof Number(b));
console.log(Number(b));
console.log(b);

console.log("   ");

let c = true;
console.log(Number(c));

console.log("   ");

let d = false;
console.log(Number(d));

console.log("   ");


// notes
//  conversion using Number()
// "33" => 33
// "33ad" => NaN // typeOf NaN is number
// true => 1 
// false => 0


let isLoggedIn = 1; 
let isLoggedIn1 = ""; 
let isLoggedIn2 = "sujit"; 
let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn); // true
console.log(booleanIsLoggedIn1); // false
console.log(booleanIsLoggedIn2); // true

// notes
//  conversion using Boolean()
// 1 => true; 0 => false
// " "=> false
// "sujit"=> true

console.log("   ");




let someNumber = 33;
let stringIntoNumber = String(someNumber); 
console.log(stringIntoNumber);
console.log(typeof stringIntoNumber);
