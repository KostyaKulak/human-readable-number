module.exports = function toReadable(number) {
    if (dict[number] != undefined) {
        return dict[number];
    } else {
        if (number < 100) {
            return toReadable10(number);
        } else {
            return toReadable100(number);
        }
    }
}

function toReadable10(number) {
    if (dict[number] != undefined) {
        return dict[number];
    } else {
        return dict[new Number(number.toString()[0]).valueOf() * 10] + " " + dict[new Number(number.toString()[1]).valueOf()];
    }
}

function toReadable100(number) {
    var res = dict[new Number(number.toString()[0]).valueOf()];
    var tens = number.toString().substring(1, 3)
    return res + " hundred" + (tens == "00" ? "" : (" " + toReadable10(new Number(tens).valueOf())));
}

var dict = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
};