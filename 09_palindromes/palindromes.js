const palindromes = function(str) {
    const stripped = str.replace(/\s/g, '').replace(/[!,.]/g, '').toLowerCase();
    const forward = stripped.split('');
    const reversed = forward.toReversed().join('');
    if (stripped == reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
