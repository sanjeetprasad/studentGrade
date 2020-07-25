/*
Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
Use console.log() to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?

*/


let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let gradesF = [];
let gradesD = [];
let gradesC = [];
let gradesB = [];
let gradesA = [];


/*for (let i=0; i<scores.length; i++) {
    console.log(scores[i]);
}

let total = 0;
for (let i=0; i<scores.length; i++) {
    total += i;
}
console.log("The total grade is:"+ ' '+total);
*/
//console.log(scores)

for (let score of scores) {
    if (score >= 50 && score <= 60) {
        gradesF.push(score);
    } else if (score >= 61 && score <= 70) {
        gradesD.push(score);
    } else if (score >= 71 && score <= 80) {
        gradesC.push(score);
    } else if (score >= 81 && score <= 90) {
        gradesB.push(score);
    }  else if (score >= 91 && score <= 100) {
        gradesA.push(score);
    }         
    
}
console.log(gradesF);
console.log(gradesD);
console.log(gradesC);
console.log(gradesB);
console.log(gradesA);

console.log(`There are ${gradesF.length} "F" grade, ${gradesD.length} "D" grade, ${gradesC.length} "C" grade, ${gradesB.length} "B" grade, and ${gradesA.length} "A" grade.`);



let min = Math.min.apply(Math, scores)
console.log("The lowest grade is:"+ ' ' +min);

let max = Math.max.apply(Math, scores)
console.log("The highest grade is:"+ ' ' +max);