var Sname = prompt("Please enter your name: ");
var units = prompt("Please enter the number of units taken: ");

while (units<0){
    units = prompt("Invalid number. Please enter units taken: ");
}

if (units >=0 && units <=30){
    console.log("Hello ${Sname}. Your grade standing is Freshman.");}

if (units >=31 && units <=60){
    console.log("Hello ${Sname}. Your grade standing is Sophmore.");}

if (units >=61 && units <=90){
    console.log("Hello ${Sname}. Your grade standing is Junior.");}

if (units >=91){
    console.log("Hello ${Sname}. Your grade standing is Senior.");}
