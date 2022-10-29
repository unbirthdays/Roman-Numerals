/*
Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:
1=I
5=V
10=X
50=L
100=C
500=D
1,000=M

For example:
toRoman(5) // 'V'

toRoman(267) // 'CCLXVII'
Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used.
So, for exmple, 4 is “IIII” and 9 is “VIIII”.
You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”.
This is not what we want here (though it’s a good, but much harder challenge).

For example:

toRoman(99)
'LXXXXVIIII'
*/

const toRoman = num => {
    let romanNum = "";
    while (num > 0) {
        if (num - 1000 >= 0) {
            romanNum += "M";
            num -= 1000;
            continue;
        } else if (num - 500 >= 0) {
            romanNum += "D";
            num -= 500;
            continue;
        } else if (num - 100 >= 0) {
            romanNum += "C";
            num -= 100;
            continue;
        } else if (num - 50 >= 0) {
            romanNum += "L";
            num -= 50;
            continue;
        } else if (num - 10 >= 0) {
            romanNum += "X";
            num -= 10;
            continue;
        } else if (num - 5 >= 0) {
            romanNum += "V";
            num -= 5;
            continue;
        } else {
            romanNum += "I";
            num -= 1;
            continue;
        }
    }

    return romanNum;
}

console.log(toRoman(5)); // prints V
console.log(toRoman(267)); // prints CCLXVII
console.log(toRoman(99)); // prints LXXXXVIIII
