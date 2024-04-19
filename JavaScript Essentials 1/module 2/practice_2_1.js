// Question 1. Write a code that will create variables and initialize them with values of Boolean, 
// Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

//literals
let bool = true;
let num = 2;
let bint = 2432124434534534;
let str = 'string';
let undefine = undefined;

//constructor functions
let bool2 = Boolean(true);
let num2 = Number(4);
let bint2 = BigInt(343222);
let str2 = String('string');

// Question 2. Print all values and all types of those values using console.log. 
// Try to use string interpolation to display the value and type at the same time with a single console.log call, 
// e.g. in the following form: 1000 [number].

// string interpolation
console.log(`${bool} [${typeof bool}]`); // 'true [boolean]'
console.log(`${bool2} [${typeof bool2}]`); // 'true [boolean]' // 
console.log(`${num} [${typeof num}]`); // '2 [number]'
console.log(`${num2} [${typeof num2}]`); // '4 [number]'
console.log(`${bint} [${typeof bint}]`); // '2432124434534534 [number]'
console.log(`${bint2} [${typeof bint2}]`); // '343222 [bigint]'
console.log(`${str} [${typeof str}]`); // 'string [string]'
console.log(`${str2} [${typeof str2}]`); // 'string [string]'
console.log(`${undefine} [${typeof undefine}]`); // 'undefined [undefined]'


// Question 3. Carry out a chain of conversions: create a boolean from bigint created from a number that was created from a string.
// Start with the value "1234". is it possible? 

let str = String("1234"); // '1234'
let num = Number(str); // 1234
let bint = BigInt(num); // 1234n
let bool = Boolean(bint); // True

// Question 4. Try adding two values of the same type and check the result type.
// try for all primitive types

let b = true + false;
let n = 200 - 100;
let bi = 232n + 3022n;
let s = 'Java' + 'Script';
let u = undefined + undefined;

console.log(`${b} : [${typeof b}]`); // '1 : [number]'
console.log(`${n} : [${typeof n}]`); // '100 : [number]'
console.log(`${bi} : [${typeof bi}]`); // '3254 : [bigint]'
console.log(`${s} : [${typeof s}]`); // 'JavaScript : [string]'
console.log(`${u} : [${typeof u}]`); // 'NaN : [number]'


// Question 5. Try adding two values of different types and check the results.
let b1 = true + 100;
let b2 = true + 100n;
let b3 = true + '100';
let n1 = 100 + 200n;
let n2 = 100 + true;
let n3 = 100 + '200';
let bi1 = 100n + 200;
let bi2 = 100n + true;
let bi3 = 100n + '200';
let s1 = '100' + 200;
let s2 = '100' + 200n;
let s3 = '100' + true;
let s4 = 'abc' + 200;
let s5 = 'abc' + 200n; 
let s6 = 'abc' + true;

console.log(`${b1} : [${typeof b1}]`); // '101 : [number]'
console.log(`${b2} : [${typeof b2}]`); // error
console.log(`${b3} : [${typeof b3}]`); // 'true100 : [string]'
console.log(`${n1} : [${typeof n1}]`); // error
console.log(`${n2} : [${typeof n2}]`); // '101 : [number]'
console.log(`${n3} : [${typeof n3}]`); // '100200 : [string]'
console.log(`${bi1} : [${typeof bi1}]`); // error
console.log(`${bi2} : [${typeof b1i2}]`); // error
console.log(`${bi3} : [${typeof bi3}]`); // '100200 : [string]'
console.log(`${s1} : [${typeof s1}]`); // '100200 : [string]'
console.log(`${s2} : [${typeof s2}]`); // '100200 : [string]'
console.log(`${s3} : [${typeof s3}]`); // '100true : [string]'
console.log(`${s4} : [${typeof s4}]`); // 'abc200 : [string]'
console.log(`${s5} : [${typeof s5}]`); // 'abc200 : [string]'
console.log(`${s6} : [${typeof s6}]`); // 'abctrue : [string]'

// BigInt cant be added to booleans and to numbers. 
// But they can be added to strings.

// Question 6. Try to modify the line const str1 = 42 + "1";
// to get the result 43 without removing the quotes around 1. 

let str1 = 42 + + '1';
// there's space between (+ +) signs to avoid a misconception with (++)