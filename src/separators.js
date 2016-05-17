'use strict';

function thousands_separators(num) {
    var newString = toString(num);
    var newSegmentation = segmentation(newString);
    var newIntegerPart = getIntegerPart(newSegmentation);
    return newIntegerPart;
}

function toString(num) {
    var newString = num.toString();

    return newString;
}

function segmentation(newString) {
    var judge;
    var str = [];

    judge = newString.indexOf(".");
    if (judge === -1) {
        str.push(newString);
    }
    else {
        str=newString.split(".");
    }

    return str;
}

function getIntegerPart(str) {
    var newInteger;

    if (str[0].length <= 3) {
        newInteger = str[0];
    }
    else {
        var position = str[0].length % 3;
        newInteger = str[0].slice(0, position) + ',';
        while (str[0].length - position > 3) {
            newInteger += str[0].slice(position, position + 3) + ',';
            position = position + 3;
        }
        newInteger += str[0].slice(position);
    }

    if (str.length > 1) {
        newInteger += '.';
        newInteger += str[1];
    }

    return newInteger;
}

module.exports = thousands_separators;
