$(document).ready(function () {
    $(".btn-generator").click(function () {
        function createElement(element) {
            return document.createElement(element);
        }

        function append(parent, el) {
            return parent.appendChild(el);
        }

        var root = 'https://randomuser.me/api/?results=10';
        var ul = document.getElementById('authors');

        fetch(root)
            .then(function serverResponse(echo) {
                if (echo.statusText === 'OK') {
                    return echo.json();
                }
            })

            .then(function Success(data) {
                let people = data.results;
                return people.forEach(function (human) {
                    let li = createElement('li'),
                        img = createElement('img'),
                        name = createElement('span');
                        gender = createElement('span');
                        email = createElement('span');
                        nationality = createElement('span');
                    img.src = human.picture.medium;
                    name.innerHTML = `${human.name.first} ${human.name.last}`;
                    gender.innerHTML = `${human.gender}`;
                    email.innerHTML = `${human.email}`;
                    nationality.innerHTML = `${human.nat}`;
                    append(li, img);
                    append(li, name);
                    append(li, gender);
                    append(li, email);
                    append(li, nationality);
                    append(ul, li);
                })
            })

            .catch(function errorMsg(error) {
                var error = "Something it's not working. Please refresh or try again later.";
                console.log((error));
            });
    });

    
    $(".btn-reloader").click(function () {
        window.location.reload(true)
    })
});