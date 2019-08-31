// 1

{
    let userName = prompt('Введите имя');

    const obj = {
        userName,
        sayHi() {
            return `Hi, ${this.userName}!`;
        }
    };

    obj.sayHi();
}


// 2

{
    let func = ({a: x, b: y}, z = 1) => {
        return (x ** y) * z;
    };

    const obj = {a: 2, b: 3};

    func(obj, 3);
}


// 3

{
    const arr = ['Mark', 25];

    let func = (name, age) => {
        return `Hello, I'm ${name} and I'm ${age} years old.`
    };

    func(...arr);
}


// 4

{
    let func = (...digits) => {
        for (let val of digits) {
            console.log(val);
        }
    };

    func(1, 2, 3, 4);
}


// 5

{
    let countVowelLetters = text => {
        const textArr = text.toLowerCase().split(''),
            vowelLetters = 'аяыиоёуюэеaeiouy';

        let counter = 0;

        textArr.forEach(val => vowelLetters.includes(val) && ++counter);

        return counter;
    }

    countVowelLetters('Все должно работать');

}


// 6

{
    const arr = [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    let func = arr => {
        const lessThenFortyArr = arr.filter(val => val.age < 40),
            fedorData = arr.find(val => val.name.startsWith('Fedor'));

        return {
            'Пользователи младше 40': lessThenFortyArr,
            'Пользователь с именем Федор': fedorData
        }
    };

    func(arr);
}


// 7

{
    const arr = ['Вася', 'Петя', 'Коля'];

    let func = arr => {
        return arr.map((val, i) => ({[`Пользователь ${++i}`]: val}));
    };

    func(arr);
}


// 8

{
    const arr = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    let func = arr => {
        return arr.reduce((res, val) => Object.assign(res, val), {});
    };

    func(arr);
}


// 9

{
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        stroke() {
            console.log('Гладим кота.');
            return this;
        }

        feed() {
            super.feed();

            console.log('Кот доволен ^_^');
            return this;
        }
    }

    let barsik = new Cat('Барсик', 300);

    console.log(barsik.feed().stroke().stroke().feed());
}


// 10

{
    let func = (x, y) => {
        return new Promise((resolve, reject) => {
            if (x > y) [x, y] = [y, x];

            let numberInRange = Math.ceil(x);

            let timerId = setInterval(() => {
                if (numberInRange > y) {
                    numberInRange === Math.ceil(x) ? reject('В диапазоне нет целых чисел') : clearInterval(timerId);

                    resolve(numberInRange);
                } else {
                    console.log(numberInRange++);
                }
            }, 1000)
        })
    }

    // попадет в then
    func(5.3, 8.9)
        .then(numberInRange => console.log(`Последнее запомненное значение ${numberInRange}`))
        .catch(error => console.log(error));

    // попадет в catch
    func(5.3, 5.9)
        .then(numberInRange => console.log(`Последнее запомненное значение ${numberInRange}`))
        .catch(error => console.log(error));
}