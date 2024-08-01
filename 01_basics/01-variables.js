const accoundId = 12345;
let accountEmail = "sujit@gmail.com";
var accountPassword = "qwerty@123";
accountCity = "pune";
let accountState;
// accoundId = 123; not allowed
accountEmail = "qwer@1123.com";
accountPassword = "1234wert"
accoundCity = "mumbai"

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accoundId);
console.table([accoundId, accountEmail, accountPassword, accoundCity, accountState]);
