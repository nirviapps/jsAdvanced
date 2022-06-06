//functions as first class citizens / first class functions
//in a programming language where functions are treated as variables, those are first class functions
//also they can be passed to another functions, can be manipulated,returned and used anywhere


function doubleValue(val)
{
    return 2 * val;
}

function getDoubledVal(cb)
{
   console.log(`Doubled Value is  ${cb(15)}`);
}

getDoubledVal(doubleValue);


// IIFE - immediately invoked function expressions
//using closures
(function multiply(a,b)
{
    console.log(a*b);
})(2,5);


(function (x)
{   //parent scope
  return (function(y){   //inner scope
     console.log(x);   
  })(2);
})(1);
//it will check for x in inner scope and can't find..then search inparentscope so output is 1, this concept is related to closure


//params vs arguments

function add(a,b) //params
{
    console.log(a+b);
}

add(5,2); //arguments
