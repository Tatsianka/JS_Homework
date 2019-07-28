var button = document.getElementsByTagName('button')[0],
    container = document.getElementsByTagName('main')[0];

button.onclick = function () {
    if (localStorage.dataFromServer) {
        var userDataArr = JSON.parse(localStorage.getItem('dataFromServer')).data;

        createUserInfoPlate(userDataArr);
    } else {
        var userData = new XMLHttpRequest();

        userData.open('GET', 'https://reqres.in/api/users?page=2', true);

        userData.send();

        userData.onload = function () {
            if (userData.status === 200) {
                var userDataArr = JSON.parse(userData.response).data;

                localStorage.setItem('dataFromServer', userData.response);

                createUserInfoPlate(userDataArr);
            } else {
                container.innerHTML += '<span class="error-JS">Error! The data cannot be recieved from the server</span>';
            }
        };
    }

    function createUserInfoPlate(userDataArr) {
        container.innerHTML += '<div class="info-container"><img src=""><div class="info"></div></div>';

        document.getElementsByClassName('box')[0].insertAdjacentHTML('afterBegin', '<div class="inserts-container"></div>');

        var insertsContainer = document.getElementsByClassName('inserts-container')[0];

        for (var i = 1; i <= userDataArr.length; i++) {
            insertsContainer.innerHTML += '<div class="insert">User ' + i + '</div>';
        }

        var insertsArr = document.getElementsByClassName('insert'),
            infoContainer = document.getElementsByClassName('info-container')[0],
            userImg = infoContainer.firstChild,
            infoBox = infoContainer.lastChild;

        insertsArr[0].classList.add('active');

        userImg.setAttribute('src', userDataArr[0].avatar);

        infoBox.innerHTML = '<span>First name: ' + userDataArr[0].first_name + '</span><span>Last Name: ' + userDataArr[0].last_name + '</span>';

        insertsContainer.addEventListener('click', function (event) {
            for (var i = 0; i < insertsArr.length; i++) {
                if (insertsArr[i] === event.target) {
                    insertsArr[i].classList.add('active');

                    userImg.setAttribute('src', userDataArr[i].avatar);

                    infoBox.innerHTML = '<span>First name: ' + userDataArr[i].first_name + '</span><span>Last Name: ' + userDataArr[i].last_name + '</span>';
                } else {
                    insertsArr[i].classList.remove('active');
                }
            }
        }, true);
    }
};