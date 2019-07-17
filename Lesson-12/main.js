// ЗАДАНИЕ 1

function createArrOfObj(arr) {
    function changeArrElem(val) {
        var nameObj = {};

        nameObj.name = val;

        return nameObj;
    }
    return arr.map(changeArrElem);
}

createArrOfObj(['Peter', 'Oleg', 'Ivan']);

// Исправленный вариант

  function createArrOfObj(arr) {
      function changeArrElem(val) {
          return {name: val};
      }

      return arr.map(changeArrElem);
  }

  createArrOfObj(['Peter', 'Oleg', 'Ivan']);



// ЗАДАНИЕ 2

function transformToTime(arr) {
    function addElem(res, val) {
        return res + ' : ' + val;
    }

    return arr.reduce(addElem, 'Текущее время');
}

transformToTime(['00', '13', '24']);



// ЗАДАНИЕ 3

 function countVowels(str) {
      var strArr = str.toLowerCase().split(''),
          vowelsQnty = 0,
          vowelsArr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

      for (var i = 0; i < strArr.length; i++) {
          if (vowelsArr.some(function(val) {
              return val === strArr[i];
          })) {
              vowelsQnty++;
          }
      }

      return vowelsQnty;
  }

countVowels('Проверим работоспособность!');
countVowels('ЧТО скажешь на числа: 123345');
countVowels('Что насчет латиницы: word for checking ');



// ЗАДАНИЕ 4

  function transformText(text) {
      var textArr = text.split(/[.!?]/);

      textArr.pop();

      function defineLength(val) {
          var strLength = val.trim().split('').filter(deleteOdd).join('').length;

          function deleteOdd (val) {
              return val !== ' ' && val !== ',';
          }

          return val + ' - ' + strLength + ' букв';
      }

      return textArr.map(defineLength).join(';\n');
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




