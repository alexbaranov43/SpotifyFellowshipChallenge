decodeString =s => {
    const pattern = /(\d+)\[([a-z]*)\]/g;
    while (s.includes("[")) {
        s = s.replace(pattern, (match, num, place) => place.repeat(num))
    }   
console.log(s)   
}

decodeString('4[a4[cd4[r]]]')
decodeString('5[k]')