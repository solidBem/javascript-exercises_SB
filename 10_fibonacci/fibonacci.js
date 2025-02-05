const fibonacci = function(number) {
    if (typeof number === 'string') {
        n = +number;
    } else {
        n = number;
    }
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return 'OOPS';
    } else {
    const fib = [0, 1];
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    const value = fib.slice(-2).reduce((a, b) => a + b);
    return value
    };
};

// Do not edit below this line
module.exports = fibonacci;
