//******************Prblm 1 ******************** */
/*Given an array of objects "pets", each object containing the name, type and year the pet was born: 
const pets = [ { name: 'Max', type: 'dog', bornOn: 2018 }, 
               { name: 'Angel', type: 'cat', bornOn: 2015 }, 
               { name: 'Jasper', type: 'dog', bornOn: 2016 } ]

1)You are going to write a function getAge() that calculates the age of each pet, 
and returns a new array with the new values of the age added to each object.
2)You are going to write a function that returns an array containing only the dogs.
3)You are going to write a function that finds the pet having the name "Jasper" and returns the string "Jasper is 4 years old."
*/
console.log("*************************Prblm1***********************************");
const pets = [ { name: 'Max', type: 'dog', bornOn: 2018 }, 
               { name: 'Angel', type: 'cat', bornOn: 2015 }, 
               { name: 'Jasper', type: 'dog', bornOn: 2016 } ]
               console.log(pets);              
//1
/*function getAge2(arr) {
    var a=0;
    for (let i = 0; i < arr.length; i++) {
        a=2021-arr[i].bornOn;
        arr[i].age=a;
    }
    return arr;
}*/
const getAge= (arr) =>arr.map(el=>el.age= 2021-el.bornOn);
console.log("array containing the age of each pet",getAge(pets));

//2
const isDog= arr =>arr.filter(el=>el.type=="dog");
console.log("the pets that are dogs",isDog(pets));
//3
const whereIsJasper =arr =>`Jasper is ${arr[arr.findIndex(el=>el.name=="Jasper")].age} years old.`;//arr.findIndex(el=>el.name=="Jasper")
console.log(whereIsJasper(pets),"//Finds Jasper and calculates his age");

//******************Prblm 2 ******************** */

console.log("*************************Prblm2***********************************");
/*Write a function that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
Ex.: [false,1,0,4,2,0,1,3,"Hello"] => [false,1,4,2,1,3,"Hello",0,0]*/

var Aaa=[false,1,0,4,2,0,1,3,"Hello"];
console.log(Aaa,"//Before the move")
const MoveZeroes = arr => [...arr.filter(el=>el!=0),...arr.filter(el=>el==0)]; 
console.log(MoveZeroes(Aaa),"//moves all of the zeros to the end");

//******************Prblm 3 ******************** */

console.log("*************************Prblm3***********************************");

/* Write a function that reverses every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
Ex.: "Hello world!" => "Hello !dlrow" */

/*var str="Hello world! Here We Are!!!!"
const ReverseWords2 = s => {
    let str
    str =s.split(" ");
for (let i = 0; i < str.length; i++) {
    if (i%2){str[i]=str[i].split("").reverse().join("") }
}
str=str.join(" "); 
return str;
};

console.log(ReverseWords2(str),"////Hello !dlrow");*/

var str="Hello world! Here We Are!!!!";
const ReverseWrd = str =>str.split(" ").map((el,i)=>i%2?el.split("").reverse().join(""):el).join(" ");

console.log(ReverseWrd(str),"//Every other words is reversed");
