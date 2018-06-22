// Given an encoded string, return it's decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
decodeString = s => {
    const pattern = /(\d+)\[([a-z]*)\]/g;
    while (s.includes("[")) {
        s = s.replace(pattern, (match, num, place) => place.repeat(num))
    }
    console.log(s);
    return s

}

decodeString('4[a4[cd4[r]]]')
decodeString('5[k]')


