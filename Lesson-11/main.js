------------ ЗАДАНИЕ 1 ------------

function filterArr(arr) {
        return arr.filter(function(value) {
            return value > 0;
        });
}

filterArr([-1, 0, 2, 34, -2]);


------------ ЗАДАНИЕ 2 ------------

var arr = [-1, 0, 2, 34, -2];

function findFirstPositiveVal(arr) {
    return arr.find(function(value) {
        return value > 0;
    });
}

findFirstPositiveVal(arr);


------------ ЗАДАНИЕ 3 ------------

function isPalindrome (word) {
    var wordArr = word.toLowerCase().trim().split(''),
        reversedWordArr = word.toLowerCase().trim().split('').reverse();
    return wordArr.every(function(val, i, arr) {
        return arr[i] === reversedWordArr[i];
    });
}

isPalindrome('ШалАШ');
isPalindrome('привет');


------------ ЗАДАНИЕ 4 ------------

function  areAnagrams(word1, word2) {
    if (word1.length === word2.length) {
        var word1Arr = word1.toLowerCase().trim().split(''),
            word2Arr = word2.toLowerCase().trim().split('');

        return word1Arr.every(function (val1, i, arr1) {
            return word2Arr.some(function(val2, j, arr2) {
                return arr1[i] === arr2[j];
            });
        });
    } else {
        return false;
    }
}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');


------------ ЗАДАНИЕ 5 ------------

function divideArr (arr, smallArrLength) {
    var newArr = [];

    while(arr.length) {
        var smallArr = arr.splice(0, smallArrLength);
        newArr.push(smallArr);
    }
    return newArr;
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);


