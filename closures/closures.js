/*
Lexical Scope 
-> It’s an environment where we write something and generally lexical refers to compile time,example where we write particular function 
-> When we define one function inside another function, the second function is lexically inside the first function 



closures -> A closure is a function tha references varibales in the outer scope from it's inner scope


*/

var firstName = "john";

//global scope
function getFistName()
{
    //local scope
    console.log(firstName);
}

getFistName();

// the varibale which is define outside of the function is accessible inside of the function...this is called as lexical scope

//if we try to do this another way



function getLastName()
{
    var lastName = 'doe';
}

console.log(lastName);

getLastName();