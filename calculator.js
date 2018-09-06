// operation button
 var operation = document.querySelector('#operation-cals');
 // adding '+' symbol
 var sum = document.querySelector('#add-cals');
 function showme(count){
     document.querySelector('#operation-cals').value=count;
     document.querySelector('#operation-cals').style.backgroundColor='#ff9815';
};
     // adding '-' symbol
 var sub= document.querySelector('#sub-cals');
 function showme1(count){
     document.querySelector('#operation-cals').value=count;
     document.querySelector('#operation-cals').style.backgroundColor='#f4ff00';
     document.querySelector('#operation-cals').style.color='black';
 };

 // adding '*' symbol
 var mul = document.querySelector('#mul-cals');
 function showme2(count){
     document.querySelector('#operation-cals').value=count;
     document.querySelector('#operation-cals').style.backgroundColor='#34008e';
 };

 // adding '/' symbol
 var div = document.querySelector('#div-cals');
 function showme3(count){
     document.querySelector('#operation-cals').value=count;
     document.querySelector('#operation-cals').style.backgroundColor='#a600a7';
 };

// getting answer
function equal()
{
var operation = document.querySelector('#operation-cals').value

// using switch statement
switch (operation) {
  // addition operation
case operation = '+':
var a,b,add;
a=Number(document.querySelector('#first-cals').value);
b=Number(document.querySelector('#second-cals').value);
add = a + b;
document.querySelector('#result-cals').value= add;
break;

// subtraction operation
case operation = '-':
var a,b,sub;
a=Number(document.querySelector('#first-cals').value);
b=Number(document.querySelector('#second-cals').value);
sub = a - b;
document.querySelector('#result-cals').value= sub;
break;

// multiplication operation
case operation = '*':
var a,b,mul;
a=Number(document.querySelector('#first-cals').value);
b=Number(document.querySelector('#second-cals').value);
mul = a * b;
document.querySelector('#result-cals').value= mul;
break;

// divition operation
case operation = '/':
var a,b,div;
a=Number(document.querySelector('#first-cals').value);
b=Number(document.querySelector('#second-cals').value);
div = a / b;
document.querySelector('#result-cals').value= div;
break;
default:
break;
}
}
