  // ЗАДАНИЕ 1

function createArrOfObj(arr) {
    function changeArrElem(val, i, arr) {
        var nameObj = {};

        nameObj.name = val;

        return nameObj;
    }
    return arr.map(changeArrElem);
}

createArrOfObj(['Peter', 'Oleg', 'Ivan']);



// ЗАДАНИЕ 2

// способ 1

function transformToTime(arr) {
    return 'Текущее время : ' + arr.join(' : ');
}

transformToTime(['00', '13', '24']);

// способ 2

function transformToTime(arr) {
    function addElem(res, val, i, arr) {
        return res + ' : ' + val;
    }
    return arr.reduce(addElem, 'Текущее время');
}

transformToTime(['00', '13', '24']);



// ЗАДАНИЕ 3

function countVowels(str) {
    var vawelArr = str.match(/[аоиеёэыуюя]/ig);
    return vawelArr.length;
}

countVowels('Проверим работоспособность!');
countVowels('ЧТО скажешь на числа: 123345');
countVowels('Что насчет латиницы: word for checking ');



// ЗАДАНИЕ 4

// вариант 1

function transformText(text) {
    var textArr = text.split(/[.!?]/);

    textArr.pop();

    return textArr.forEach(function(val,i,arr) {
        var lettersArr = val.match(/[а-яёa-z]/ig);

        console.log (val.trim() + ' - ' + lettersArr.length + ' букв');
    });
}

transformText('Всем привет! Я удивлен, что вы здесь! Когда вы пришли? Я вас не видел.');

// вариант 2

function transformText(text) {
    var textArr = text.split(/[.!?]/);

    textArr.pop();

    var elemLengthArr = textArr.map(function(val,i,arr) {
        var lettersArr = val.match(/[а-яёa-z]/ig);

        return val.trim() + ' - ' + lettersArr.length + ' букв';
    });

    return elemLengthArr.join(';\n');
}

transformText('Всем привет! Я удивлен, что вы здесь! Когда вы пришли? Я вас не видел.');



// ЗАДАНИЕ 5

function findRepeatedWords(text) {
    var wordArr = text.trim().toLowerCase().split(/[^a-zа-яё]+/g);

    wordArr.pop();

    var mostRepeatedWord,
        maxRepitationQnty = 0;

    for (var i = 0; i < wordArr.length; i++) {
        var repQnty = 0;

        for (var j = 0; j < wordArr.length; j++) {
            if (wordArr[i] === wordArr[j]) {
                repQnty++;
            }
        }

        if (repQnty > maxRepitationQnty) {
            maxRepitationQnty = repQnty;
            mostRepeatedWord = wordArr[i];
        }
    }

    return 'Максимальное число повторений у слова ' + '\"' + mostRepeatedWord + '\"' + ' - ' + maxRepitationQnty;
}

findRepeatedWords('Всем привет! Я удивлен, что вы здесь! Когда вы пришли привет? Я вас не видел привет.');


// еще вариант решения

function findRepeatedWords(text) {
    var wordArr = text.trim().toLowerCase().split(/[^a-zа-яё]+/g);

    wordArr.pop();

    function getRepElem(val, i, arr) {
        var reg = new RegExp(val,'gi');

        return text.match(reg);
    }

    var lengthArr = wordArr.map(getRepElem);

    for (var i = (lengthArr.length-1); i > 0; i--) {
        for (var j = 0; j < lengthArr.length; j++) {
            if (lengthArr[j].length === i) {
                var result = 'Максимальное число повторений у слова ' + '\"' + lengthArr[i][0] + '\"' + ' - '
                    + lengthArr[i].length;
                break;
            }
            break;
        }
    }
    return result;
}


findRepeatedWords('Всем привет! Я удивлен, что вы здесь! Когда вы пришли привет? Я вас не видел привет.');




