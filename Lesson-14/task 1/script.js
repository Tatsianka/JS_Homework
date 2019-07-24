var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

function changeStyle() {
    var linksOfFirstPar = container.firstChild.children;

    for (var i = 0; i < linksOfFirstPar.length; i++) {
        linksOfFirstPar[i].classList.add('changedStyle-JS');
    }
}

button.addEventListener('click', changeStyle, false);

container.onclick = function(event) {
    var linksOfSecondPar = container.lastChild.children,
        target = event.target;

    for (var i = 0; i < linksOfSecondPar.length; i++) {
        if (linksOfSecondPar[i] === target) {
            event.preventDefault();

            alert(linksOfSecondPar[i].getAttribute('href'));
        }
    }
};










