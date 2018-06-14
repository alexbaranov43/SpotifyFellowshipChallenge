sortByStrings = (s, t) => {
let count = {};
let sort = "";

for (char of s){
    count[char]? count[char]++ : count[char] = 1;
}
for (char of t){
    if (count[char]) {sort += char.repeat(count[char])}
}
console.log(sort)
}

sortByStrings("good", "odg")
sortByStrings("octopus", "orange")