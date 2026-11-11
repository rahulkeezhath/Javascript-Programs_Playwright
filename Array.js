let fruits = ["Apple", "Orange", "Grape"]
console.log(fruits[1]);// Index = 0,1,2
console.log(fruits.length);//3
fruits.push("Kiwi")// Add Element at Last
console.log(fruits);
fruits.pop()//Remove last element
console.log(fruits);
fruits.shift()// Remove the first Element
console.log(fruits);
fruits.unshift("Mango") // Add to First Element
console.log(fruits);
console.log(fruits.includes("Apple"));// Check whether the element is Present or not
console.log(fruits.indexOf("Mango")); // Find the Index of an Element
fruits.push("Apple","Kiwi","Banana")
console.log(fruits);
const slicedArray = fruits.slice(1,5) // Slice is a function which create subarray which add specific things from main array 
// First Include ann Last 5 is not included in Slice
console.log(slicedArray);

console.log("**************");

console.log(fruits);
fruits.splice(2,3)//2 index start and total 3 will delete from index 2
console.log(fruits);
fruits.splice(1,0,"Apple","Grape", "Kiwi") //
console.log(fruits);
fruits.splice(2,2,"Pomogrante","Strawberry") //Updating
console.log(fruits);
