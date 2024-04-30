// Comparison operators
// identity operator or strictly equal (===)
// equality operator (==)
console.log(10 === 5); // false
console.log(10 === 10); // true
console.log(10 === 10n); // false
console.log(10 === "10"); // false
console.log("10" === "10"); // true
console.log("Alice" === "Bob"); // false
console.log(0 === false); // false
console.log(undefined === false); // false

console.log(10 == 5); // false
console.log(10 == 10); // true
console.log(10 == 10n); // true
console.log(10 == "10"); // true
console.log("10" == "10"); // true
console.log("Alice" == "Bob"); // false
console.log(0 == false); // true
console.log(undefined == false); // false 
console.log(NaN == NaN); // false


// nonidentity operator (!==)
// inequality operator (!=)
console.log(10 !== 5); // true
console.log(10 !== 10); // false
console.log(10 !== 10n); // true
console.log(10 !== "10"); // true
console.log("10" !== "10"); // false
console.log("Alice" !== "Bob"); // true
console.log(0 !== false); // true
console.log(undefined !== false); // true
console.log(10 != 5); // true
console.log(10 != 10); // false
console.log(10 != 10n); // false
console.log(10 != "10"); // false
console.log("10" != "10"); // false
console.log("Alice" != "Bob"); // true
console.log(0 !=  false); // false
console.log(undefined != false); // true
console.log(NaN != NaN); // true

// >, <, >=, <=
// The algorithm is complex and the comparison is not very useful when
// comparing strings that do not represent numbers. 
// To simplify, the higher the letter's position in the alphabet, the higher the
// value. 
// But, if its a capital letter, regardles of position, is less in value
// than lower case.
// Moreover, digits have even lower values than letters. 

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true


// Section practice
let width = prompt("Volume of the box, enter width:");
let height = prompt("Volume of the box, enter height");
let length = prompt("Volume of the box, enter length");
let volume = width * height * length;
alert(`Calculated box volume is ${volume}`);
