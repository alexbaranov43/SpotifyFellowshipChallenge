changePosibilities = (amount, denominations) => {
let possibilties = new Array(amount + 1).fill(0)
possibilties[0] = 1;
denominations.map(denomination => {
    for(i = denomination; i <=amount; i++){
        let remainder = i - denomination;
        possibilties[i] += possibilties[remainder]
    }
});
console.log(possibilties[amount]);
}

changePosibilities(6, [1,2,3,4])
changePosibilities(4, [1,2,3,4])