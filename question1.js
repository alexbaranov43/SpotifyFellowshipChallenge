sortByStrings = (s, t) => {
let count = {};
let sort = "";

for (let char of s){
    count[char]? count[char]++ : count[char] = 1;
}
for (let char of t){
    if (count[char]) {sort += char.repeat(count[char])}
}
console.log(sort)
}

sortByStrings("good", "odg")
sortByStrings("octopus", "orange")