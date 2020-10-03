                //BASICS OF LEARNING JAVASCRIPT



console.log("hello")
 console.log("what is your name")
// alert("this is keshav")

//thats how you comment 

//variables
var b='smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);



//var age=prompt('what is your age ?');
//document.getElementById('sometext').innerHTML = age;

var num1=10;
//increment num1 by 1
num1++;

//decrement num1 by 1
num1--;
console.log(num1);

//functions 
//step 1: create a function by predefined syntax
//step 2: call the function
//explanation: its like naming a child, you name them and to get their attention you have to call them.

function fun()
{
    alert("this is a funtion man!")
}

fun();//called function



/*lets call a function that takes in a name and says hello followed by your name.
For example:
name: keshav 

output: hello keshav*/



function greet(yourname)
{
   
    var result='hello '+ ' '+ yourname; //example of string concatination
    console.log(result);
}
var name=prompt("what is your name?");
greet(name);



/* how arguments work in funciton
example of multiplying two numbers in a function

*/

function  productNumber(n1,n2)
{
    var result=n1*n2;    
    console.log(result);
}
productNumber(4,10);



//LOOPS

//while loops

var num=0;
while(num<100)
{
    num++;
    console.log(num);
}



//for loops
for(let num=0;num<100;num++){
    console.log(num);
}


//learning data science

var yourAge=18;  //number
let yourname='bob'; //string type
let name={first:'keshav',last:'parashar'};  //object  //in pythton we call this a dictionary
let truth=true; //boolean
let groceries=['apple','mango','avocado']; //array
let anonymous; //undefined
let nothing=null;  //value null


//Strings and its Methods

let veggies='eggplant';
let moreveggies='eggplant\npotato'    // \n for new line
//console.log(moreveggies);

console.log(veggies.length);           //length of string

console.log(veggies.indexOf('plan'));    //index of a substring

console.log(veggies.slice(2,6));    //slicing from 2 to 6 ,including both !

console.log(veggies.replace('egg','123'));      //replacing substring with another  substring

console.log(veggies.toUpperCase(veggies));  //converting to UPPERCASE

console.log(veggies.toLowerCase(veggies));  //converting to lowercase

console.log(veggies.charAt(0));             //return character at defined index, string from 0

console.log(veggies[0]);            //same as above

console.log(veggies.split(','));        //split by a comma
console.log(veggies.split(''));         //split by a character



//ARRAYS in JAVASCRIPT

let fruits=['banana','apple','orange','pineapple'];

fruits=new Array('banana','apple','orange','pineapple');
console.log(fruits[2]);   //access value at 2nd index

fruits[0]='pear'
console.log(fruits);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Array common methods
console.log('to string',fruits.toString());

console.log(fruits.join('--'));
console.log(fruits.pop(),fruits);       //removes last items
console.log(fruits.push('blackberry'),fruits);      //appends items
console.log(fruits[3]); //should return blackberrys
fruits[4]='new fruit';
console.log(fruits);
fruits.shift();     //removes first elemetn from the list
console.log(fruits);
fruits.unshift('kiwi'); //add first elemetn to an array
console.log(fruits);


let vegetables=['asparagus','tomato','broccoli'];
console.log(vegetables);
let fooditems=fruits.concat(vegetables);        //concats two arrays
console.log(fooditems);

console.log(fooditems.slice(2,4));      //slice array from 2 to 4

console.log(fooditems.reverse());           //reverses the array

console.log(fooditems.sort())


let randonumbers=[5,3,6,2,7,2,8];
console.log(randonumbers.sort());           //sorts the array in ascending order

console.log(randonumbers.sort(function(a,b) {return a-b})); //just another way
console.log(randonumbers.sort(function(a,b) {return b-a})); //for descending order


let emptyarray=new Array();
for(let n=0;n<=10;n++){
    emptyarray.push(n);
}
console.log(emptyarray);


Objects
or dictionaries in pyhton

let employee={first:'Keshav',last:'parashar',
                emplopyeeInfo: function()
                {
                    return this.first+ '\n'+ this.last;     //this is equivalent to self in pyhton
                }    
                };
console.log(employee.first);//cant access using indexes ,depricated  feature

employee.first='rajeev';        //change value
console.log(employee.first);

console.log(employee.emplopyeeInfo()); 








