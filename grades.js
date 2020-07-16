const scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


for (let i=0; i<scores.length; i++) {
    console.log(scores[i]);
}

let total = 0;
for (let i=0; i<scores.length; i++) {
    total += i;
}
console.log("The total grade is:"+ ' '+total);



let min = Math.min.apply(Math, scores)
console.log("The lowest grade is:"+ ' ' +min);

let max = Math.max.apply(Math, scores)
console.log("The highest grade is:"+ ' ' +max);