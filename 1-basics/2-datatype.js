"use strict";//treat all the JS code as newer version 

//alert( 3+3)//we are using nodejs not the browser 

console.log(3
            +
            3)// avoid this pattern of writing, code readability should be high

let name ="arya"
let age = 20
let isLoggedIn = false
//some of the primitive data types 
/* number range is 2 to power 53
bigint for very large value 
string =""
boolean=> value is either true or falses
 null=> value is not assigneed ,the place is empty not zero
 undefined =>
    symbol=> mainly used in react ,when u make a lot of funtions 
 and want to identify that the one funtion is unique than the other 
 then we use symnols ,mainly used for the identification of unique function

 object*/

 // code to know the type of datatype values used  
 console.log(typeof null)//object
 console.log(typeof age )//number
 console.log(typeof "arya")//string
 console.log(typeof undefined )//undefined
 console.log(typeof isLoggedIn )//boolean
 console.log(typeof name )//error because name a variable not the datatype
  


