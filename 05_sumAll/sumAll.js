const sumAll = function(num1, num2) {
        let error = "ERROR";
        const allNums = [];   
        if (Number.isInteger(num1, num2) 
             && num1 > 0 
             && num2 > 0
             && typeof num1 === 'number'
             && typeof num2 === 'number') {
                  let lilNum = Math.min(num1, num2);
                  let bigNum = Math.max(num1, num2);
                  for (let i = lilNum; i <= bigNum; i++) {
                  allNums.push(i);
                  }
                  console.log(allNums);
                  const sum = allNums.reduce((total, amount) => total + amount);
                  return sum;
        } else {
             return error;
        }
};


// Do not edit below this line
module.exports = sumAll;
