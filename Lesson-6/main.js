/*------------ ЗАДАНИЕ 1 ---------------*/

function Cat(name) {
    this.name = name;

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount+' гр.';
    }

    this.feed = function() {
        return 'Насыпаем в миску '+ formatFoodAmount() +' корма.';
    };
}

var barsik = new Cat('Barsik');

barsik.feed();


/*------------ ЗАДАНИЕ 2 ---------------*/

function Cat(name) {
    this.name = name;

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount+' гр.';
    }

    this.feed = function() {
        return 'Насыпаем в миску '
               + formatFoodAmount()
               +' корма.';
    };

    this.dailyNorm = function(norm) {
        if(!arguments.length) return foodAmount;
        else if(norm < 50 || norm > 500) {
            alert('Введено неверное значение. Норма должна находиться в пределах от 50 до 500 гр.');
        } else {
            return foodAmount=norm;
        }
    };
}

var barsik = new Cat('Barsik');

barsik.dailyNorm(100);

barsik.feed();
