function decodeString(s) {
    const regex = /(\d+)\[([a-z]*)\]/g;
    while (s.includes("[")) {
        s = s.replace(regex, (match, amount, part) => part.repeat(amount))
    }
    
console.log(s)
    
}

decodeString('4[a4[cd4[r]]]')
