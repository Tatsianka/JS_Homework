var button = document.getElementsByTagName('button')[0],
    inputCollection = document.getElementsByTagName('input');


button.setAttribute('disabled', 'true');

for (var i = 0; i < inputCollection.length; i++) {
    var inputEl = inputCollection[i];

    inputEl.addEventListener('keyup', function() {

        if (inputEl.value.trim()) {

            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'true');
        }
    }, false)
}


// button.setAttribute('disabled', 'true');
// inputEl.addEventListener('keyup', function() {
//     if (inputEl.value.trim()) {
//         button.removeAttribute('disabled');
//     }
// }, false);


button.addEventListener('click', function() {
    if (document.getElementsByClassName('table')[0]) {
        document.getElementsByClassName('table')[0].remove();
    }
    var xValue = +inputCollection[0].value,
        yValue = +inputCollection[1].value;

    if (isNaN(xValue) || isNaN(yValue) || xValue > 10 || xValue < 1 || yValue > 10 || yValue < 1) {
        alert('Ошибка! Поле должно содержать числовое значение от 1 до 10');
    } else {
        var container = document.getElementsByTagName('main')[0],
            chessBoard = container.appendChild(document.createElement('table'));

        chessBoard.classList.add('table');

        for (var i = 0; i < yValue; i++) {
            if (i % 2 > 0) {
                chessBoard.appendChild(document.createElement('tr'));

                for (var j = 0; j < xValue; j++) {
                    if (j % 2 > 0) {
                        document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).classList.add('cell', 'black');
                    } else {
                        document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).classList.add('cell');
                    }
                }
            } else {
                chessBoard.appendChild(document.createElement('tr'));

                for (var j = 0; j < xValue; j++) {
                    if (j % 2 == 0) {
                        document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).classList.add('cell', 'black');
                    } else {
                        document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).classList.add('cell');
                    }
                }
            }
        }
    }
}, false);

var container = document.getElementsByTagName('main')[0];

container.onclick = function (event) {
    if (document.getElementsByTagName('table')[0]) {
        var chessBoardEls = container.getElementsByTagName('td'),
            target = event.target;

        if (target.tagName === 'TD') {
            for (var z = 0; z < chessBoardEls.length; z++) {
                chessBoardEls[z].classList.toggle('black');

            }
        }
    }
};

