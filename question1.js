
/* sortByStrings(s,t): Sort the letters in the 
string s by the order they occur in the 
string t. 
You can assume t will not have repetitive characters. 
 For s = "weather" and t = "therapyw", the output should 
 be sortByString(s, t) = "theeraw". For s = "good" 
 and t "odg", the output should be s
 ortByString(s, t) = "oodg". */
 
sortByStrings = (s, t) => {
    let count = {};
    let sort = "";

    for (char of s) {
        count[char] ? count[char]++ : count[char] = 1;
    }
    for (char of t) {
        if (count[char]) { sort += char.repeat(count[char]) }
    }
    console.log(sort)
    return sort
}

sortByStrings("good", "odg")
sortByStrings("octopus", "orange")