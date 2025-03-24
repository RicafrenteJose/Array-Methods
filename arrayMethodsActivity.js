// Use concat() to join two arrays
let arr1 =  ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedarr = arr1.concat(arr2);
console.log(combinedarr);

// use push() to add kiwi to the fruits array
let fruits= ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// use unshift() to add two numbers to the beginning of array
let array1 = [1,2,3];
array1.unshift(4,5);
console.log(array1);

//use pop() to remove the last element from the fruits array
fruits.pop();
console.log(fruits);

//use shift() to remove the first element from array2
let array2 = [1,2,3];
array2.shift();
console.log(array2);

//use sort() to sort the fruits alphabetically
fruits.sort();
console.log(fruits);

//Use slice() to create a new array containing a portion of the fruits array.
let sliceFruits = fruits.slice(0,2);
console.log(sliceFruits);

//use splice() to insert and remove elements in the months array.
let months = ["Jan", "Feb", "April","May"];
months.splice(2,0, "Mar");
console.log(months);
months.splice(4,1,"Dec");
console.log(months);


