const scores = [45,78,32,88]

const allPassed = scores.every(score => score > 30)

console.log(allPassed);

const hasPass = scores.some(score => score > 50);

console.log(hasPass);