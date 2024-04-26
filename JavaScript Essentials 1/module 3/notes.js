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
