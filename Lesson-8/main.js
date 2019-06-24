function Animal(name) {
    this._foodAmount = 50;

    var self = this;

    this._formatFoodAmount = function() {
        return self._foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return self._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed();

        console.log('Кот доволен ^_^');

        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота');

        return this;
    }

}

var barsik = new Cat('Барсик');


// Проверка для задания 1

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());


// Проверка для задания 2

barsik.feed().stroke();

barsik.stroke().feed();

barsik.stroke().feed().feed().stroke().feed();