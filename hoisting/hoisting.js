/*
Hoisting is the behaviour of moving the variable and function declaration to top of their respective environments during compilation 
Variables are partially hoisted and functions(without parameters) are  hoisted 

hoisting is applicvable to ES5 and not applicable to ES6 syntax, means it won't work with let, const 


*/

console.log(a); // this will show undefined in console 
var a = 10; 


text(); // this will print hello -> and this is because of hoisting, the javascript engine is allocating memory for variables and functions that are visible during  creation phase befofre it executes them 

function text()
{
    console.log('hello')
}

console.log(add());


function add(a,b)
{
    return a+b;
}
