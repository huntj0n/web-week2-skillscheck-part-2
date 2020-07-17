//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Write a function called dragonMapper that takes in an 
//array and maps over each element, adding the string 
//'...here be dragons' to the end of each element. 
//dragonMapper should return the the new array. You should
//use the built-in array method .map
  
  //Code here
function dragonMapper (arr){
  let newArr = arr.map(el=> el + "...here be dragons")
  return newArr
}


//////////////////PROBLEM 2////////////////////

//Write a function called cookieLoversOnly that takes 
//in an array and filters out every object that
//does NOT have the key favoriteCookie.
//cookieLoversOnly should return the filtered array.
  
  //Code here
function cookieLoversOnly(arr){
  let filtered = arr.filter(el=> el.favoriteCookie)
  return filtered
}

//////////////////PROBLEM 3////////////////////

//Write a function called changeValue that takes 
//in an array, and a callback function.
//changeValue should invoke the callback function 
//for every element in the array. 
//changeValue should pass the current element into 
//the callback function as an argument every time it is invoked.
//Hint: there is an array method for this.


  //Code here
function changeValue(arr, cb){
  arr.forEach(el => cb(el))
}


//////////////////PROBLEM 4////////////////////

// Write a function called findProduct that takes in 
// an array, and uses .reduce to find the product of 
// the elements (here the word product means the result 
// of multiplying all the elements together)
// Return the product.
  
  //Code here
function findProduct(arr){
  let product = arr.reduce(((p, el) => p*el),0)
  return product
}

//////////////////PROBLEM 5////////////////////

// Write a function called cipherize that takes in 
// an array, and a string. It should use the 
// array method .indexOf to find the index of the passed-in 
// string in the array. Then, it should use the method .charAt
// to find the character at that index, in the string. 
// Return that character.

// EX: cipherize(["hello", "world", "wide", "web"], "wide")
// index of string in the array: 2
// character at index 2 of "wide": "d"
// cipherize will return: "d"

  //Code here
  cipherize = (arr, str) => {
    let index = arr.indexOf(str)
    return str.charAt(index);
  }


//////////////////PROBLEM 6////////////////////

//Write a function called reverseMe that takes in 
//a string, reverses it, and returns the reversed 
//string. Use built-in methods for taking the string 
//apart, reversing it, and putting it back together again.

  //Code here
  // reverseMe = (str) => {
  //   var splitstr = str.split("");
  //   var reversestr = str.reverse("");
  //   var joinstr = str.join("")
  //   return joinstr
  // }

  // function reverseMe(str) {
  //   var newString = "";
  //   for (var i = str.length - 1; i >= 0; i--) {
  //       newString += str[i];
  //   }
  //   return newString;
  // }
  function reverseMe(str){
    let reversed = str.split('').reverse("").join("");
    return reversed
  }