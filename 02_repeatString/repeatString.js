const repeatString = function(word, number) {   
    let repeatedWord = '';
    if (number >= 0) {
    for (let i = 0; number > i; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = repeatString;
