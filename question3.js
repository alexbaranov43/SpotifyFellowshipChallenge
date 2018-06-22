/*Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.
Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
same as changePossibilities(targetSum, arrOfNums) -> count how many different ways the nums can result in targetSum
return count
hash table?
sort the array, go thru each element. if element is <= to targetSum
break down result to lowest num 1
*/
changePosibilities = (amount, denominations) => {
    let possibilties = new Array(amount + 1).fill(0)
    possibilties[0] = 1;
    denominations.map(denomination => {
        for (i = denomination; i <= amount; i++) {
            let remainder = i - denomination;
            possibilties[i] += possibilties[remainder]
        }
    });
    console.log(possibilties[amount]);
    return possibilties[amount]
}

changePosibilities(6, [1, 2, 3, 4])
changePosibilities(4, [1, 2, 3, 4])