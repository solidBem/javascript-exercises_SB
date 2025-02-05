const removeFromArray = function (numArray, ...theArgs) {
        const newArray = [];
        numArray.forEach((item) => {
             if(!theArgs.includes(item)) {
                  newArray.push(item);
             }
        });
        return newArray;  
    };

// Do not edit below this line
module.exports = removeFromArray;
