// ------------------------------     СРАВНЕНИЕ ОБЪЕКТОВ

function compareObj(obj1, obj2) {
    var keyArrObj1 = [],
        keyArrObj2 = [];

    //проверка: равное ли количество ключей содержится в объекте

    for (var k in obj1) {
        keyArrObj1.push(k);
    }

    for (var k in obj2) {
        keyArrObj2.push(k);
    }

    if (keyArrObj1.length !== keyArrObj2.length) {
        return 'Объекты не равны';
    }

    //проверка: одинаковые ли ключи содержат объекты

    var numberEq = 0;

    for (var i = 0; i < keyArrObj1.length; i++) {
        for (var j = 0; j < keyArrObj2.length; j++) {
            if (keyArrObj1[i] === keyArrObj2[j]) {
                numberEq++;
            }
        }
    }

    if (numberEq !== keyArrObj1.length || numberEq !== keyArrObj2.length) {
        return 'Объекты не равны';
    }

    //проверка на равенство значений одинаковых ключей объектов

    for (var k in obj1) {
        for (var n in obj2) {
            if (k === n) {

                // если значение ключа отностится к строке, числу, null или undefined

                if ((typeof (obj1[k]) !== 'object' && typeof (obj1[k]) !== 'function') || obj1[k] === null) {
                    if (obj1[k] !== obj2[n]) return 'Объекты не равны';
                }

                // если значение ключа - объект

                else if (typeof (obj1[k]) === 'object' && !Array.isArray(obj1[k]) && typeof (obj2[n]) === 'object'
                    && !Array.isArray(obj2[n])) {
                    if (compareObj(obj1[k], obj2[n]) === 'Объекты не равны') return 'Объекты не равны';
                }

                // если значение ключа - массив

                else if (Array.isArray(obj1[k]) & Array.isArray(obj2[n])) {
                    var helper1 = obj1[k],
                        helper2 = obj2[n];

                    function compareArr(helper1, helper2) {
                        if (helper1.length !== helper2.length) return 'Объекты не равны';

                        else {
                            for (var i = 0; i < helper1.length; i++) {
                                if (typeof (helper1[i]) !== 'object' || helper1[i] === null) {
                                    if (helper1[i] !== helper2[i]) return 'Объекты не равны';
                                } else if (typeof (helper1[i]) === 'object' && !Array.isArray(helper1[i]) &&
                                    typeof (helper2[i]) === 'object' && !Array.isArray(helper2[i])) {
                                    var funcValue = compareObj(helper1[i], helper2[i]);

                                    if (funcValue === 'Объекты не равны') return 'Объекты не равны';
                                } else if (Array.isArray(helper1[i]) & Array.isArray(helper2[i])) {
                                    if (compareArr(helper1[i], helper2[i]) === 'Объекты не равны') return 'Объекты не равны';
                                } else {
                                    return 'Объекты не равны';
                                }
                            }
                        }
                        return 'Объекты равны';
                    }

                    if (compareArr(helper1, helper2) === 'Объекты не равны') return 'Объекты не равны';
                }

                // если значение ключа - функция

                else if (typeof (obj1[k]) === 'function' && typeof (obj2[n]) === 'function') {
                    if (obj1[k].toString() !== obj2[n].toString()) return 'Объекты не равны';
                } else {
                    return 'Объекты не равны';
                }

            }
        }
    }
    return 'Объекты равны';
}


// проверка

var obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
var obj2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

compareObj(obj1, obj2);

var obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{1: 4}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var obj2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello4444');
    }
};

compareObj(obj1, obj2);

var obj1 = {
    array2: [{}, {4: 4}, [1, 2, 3, [{1: 1, 2: 2}, 3]]]
};

var obj2 = {
    array2: [{}, {4: 4}, [1, 2, 3, [{1: 1, 2: 2}, 3]]]
};

compareObj(obj1, obj2);

var obj1 = {
    array2: [{}, {4: 4}, [1, 2, 3, [{1: 1, 2: 2}, 3]]]
};

var obj2 = {
    array2: [{}, {4: 4}, [1, 45, 3, [{1: 1, 2: 2}, 3]]]
};

compareObj(obj1, obj2);


// ------------------------------     КЛОНИРОВАНИЕ ОБЪЕКТОВ


var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};


function deepClone(obj) {
    var clone = {};

    for (var k in obj) {
        if (typeof (obj[k]) !== 'object' || obj[k] === null) {
            clone[k] = obj[k];
            continue;
        } else if (typeof (obj[k]) === 'object' && !Array.isArray(obj[k])) {
            clone[k] = deepClone(obj[k]);
        } else if (Array.isArray(obj[k])) {
            var helper = obj[k];

//функция для клонирования многовложенных массивов внутри объектов,в теле будет вызывать сама себя (рекурсия)

            function cloneArr(helper) {
                var arr = [];

                for (var i = 0; i < helper.length; i++) {
                    if (typeof (helper[i]) !== 'object' || helper[i] === null) {
                        arr.push(helper[i]);
                        continue;
                    } else if (typeof (helper[i]) === 'object' && !Array.isArray(helper[i])) {
                        arr.push(deepClone(helper[i]));
                        continue;
                    } else if (Array.isArray(helper[i])) {
                        arr.push(cloneArr(helper[i]));
                    }
                }
                return arr;
            }

            clone[k] = cloneArr(helper);
        }

    }
    return clone;
}


// проверка

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


// для проверки клонирования многовложенных массивов объектов

var initialObj1 = {
    array2: [{}, {4: 4}, [1, 2, 3, [{1: 1, 2: 2}, 3]]]
};

var clonedObj1 = deepClone(initialObj1);

console.log(initialObj1);
console.log(clonedObj1);