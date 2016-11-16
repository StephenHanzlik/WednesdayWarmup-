'use strict';


//Print an array that has only numbers larger than 10
//expect [12,90]

// YOUR CODE HERE
var array = [12,2,3,90,0];
var gt10 = [];

for (var i = 0; i < array.length; i++){
  if(array[i] > 10){
    gt10.push(array[i]);
  }
}

//or

var array = [12,2,3,90,0];
var gt10 = array.filter (e => e )


console.log(gt10);

//What if I want the numbers that are less than 10?
//expect [2,3,0]

// YOUR CODE HERE
var array = [12,2,3,90,0];
var lt10 = [];
for (var c = 0; c < array.length; c++) {
  if(array[c] < 10){
    lt10.push(array[c]);
  }
}

console.log(lt10);

////////////////////////////////////////////////////


var thirdGraders = [];
// using a for loop write code that will show the info for people in 3rd grade
// YOUR CODE HERE

for (var i = 0; i < students.length; i++) {
   if(students[i].grade === "3"){
     thirdGraders.push(students[i]);
   }
}

console.log(thirdGraders); // Lori and Sally objects

// use the filter method to produce the same results
var students =
[
  {name: "Lori", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Sally", grade:"3"},
  {name: "Cory", grade:"1"}
];
// YOUR CODE HERE
function gradeFilter(val){
  return val.grade === "3";
}
var filteredThirdGraders = students.filter(gradeFilter);

console.log(filteredThirdGraders);

// What if I just want the names of the third graders? Write code that will return an array with just their names.

// YOUR CODE HERE


console.log(firstLetterOfThirdGraders);// [Lori, Sally]
