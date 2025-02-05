const reverseString = function(string) {
        let forwardArray = string.split("");
        let backwardArray = [];
        for (i = 0; i < string.length; i++) {
        backwardArray.unshift(forwardArray[i]);
    };
    return backwardArray.join("");
    }

// Do not edit below this line
module.exports = reverseString;
