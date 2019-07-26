var button = document.getElementsByTagName('button')[0],
    wrapper = document.getElementsByTagName('main')[0],
    inputCollection = wrapper.getElementsByTagName('input');

button.setAttribute('disabled', 'true');

wrapper.addEventListener('keyup', function () {
    var xValue = inputCollection[0].value,
        yValue = inputCollection[1].value;

    (xValue.trim() && yValue.trim()) ? button.removeAttribute('disabled') : button.setAttribute
    ('disabled', 'true');
}, false);

button.addEventListener('click', function () {
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
            chessBoard.appendChild(document.createElement('tr'));

            for (var j = 0; j < xValue; j++) {
                if (j % 2 == i % 2) {
                    document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).
                    classList.add('cell', 'black');
                } else {
                    document.getElementsByTagName('tr')[i].appendChild(document.createElement('td')).
                    classList.add('cell');
                }
            }
        }
    }
}, false);

wrapper.addEventListener('click', function(event) {
    if (document.getElementsByTagName('table')[0]) {
        var chessBoardEls = wrapper.getElementsByTagName('td'),
            target = event.target;

        if (target.tagName === 'TD') {
            for (var z = 0; z < chessBoardEls.length; z++) {
                chessBoardEls[z].classList.toggle('black');
            }
        }
    }
}, false);

