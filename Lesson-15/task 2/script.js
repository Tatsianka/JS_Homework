var buttonForAdd = document.getElementsByClassName('button')[0],
    table = document.getElementsByTagName('table')[0];

buttonForAdd.onclick = function() {
    table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
};

table.onclick = function(event) {
    var cellCollection = document.getElementsByTagName('td'),
        target = event.target;

    for (var i = 0; i < (cellCollection.length - 1); i++) {
        if (target === cellCollection[i]) {
            var cellContent = cellCollection[i].textContent;

            cellCollection[i].innerHTML = '<input type="text">';

            var inputEl = document.getElementsByTagName('input')[0];

            inputEl.focus();

            inputEl.value = cellContent;

            inputEl.onblur = function() {
                inputEl.parentNode.textContent = inputEl.value;
            };

            inputEl.onkeydown = function (btn) {
                if (btn.keyCode === 13) {
                    inputEl.parentNode.textContent = inputEl.value;
                }
            };
        }
    }
}



