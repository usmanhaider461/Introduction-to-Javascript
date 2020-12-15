// Array Methods
// Push / Pop
// shift / unshift
// indexOf
// slice

var colors = ["red","orange","yellow"];
colors[colors.length] = "green";
console.log(colors)
// Another method called push add at the end of an array
colors.push("Indigo"); // also return length of an array
// to remove an item at the end of an array and return its value
colors.pop();

// unshift add to the first of an array
colors.unshift("indigo");
// shift remove the first item in the array
colors.shift(); // return the removed item

colors.indexOf("green"); // to find the index of an item in an array
// returns the index of the searched item if found
// if not found, returns -1

// slice(start index, end index) to copy parts of an array

var newColors = colors.slice(1,3);
// Does not include the start index
console.log(newColors);

// you can also copy whole array using slice()

wholeColors = colors.slice();
console.log("Whole Colors",wholeColors);
console.log(colors[colors.length]);


var friendGroups = [
    ["Bilal","Naeem","Abaid"],
    ["Mohsin","Zeeshan","Umair"],
    ["Fakhar","Shajar","Jabbar"]
]

console.log(friendGroups[2][0]);

