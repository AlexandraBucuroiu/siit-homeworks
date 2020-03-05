const apiUrl = 'https://games-world.herokuapp.com/games';

(async function () {
    const url = apiUrl;
    //request de tip GET
    const games = await fetch(url).then(res => res.json());
    displayGames(games);
    attachEventListeners();
})();

//------------------------------------------------

function displayGames(games) {
    const fragment = document.createDocumentFragment();

    for (const game of games) {
        const gameHtml = createHtml(game);
        fragment.append(gameHtml);
    }

    document.body.append(fragment);
}

function createHtml(game) {
    const wrapper = document.createElement('article');
    wrapper.setAttribute("id", game._id);

    //creat titlu
    const titlu = document.createElement('h2');
    titlu.innerHTML = game.title;

    //creat descriere
    const description = document.createElement('p');
    description.innerHTML = game.description;

    //creat imagine
    const image = document.createElement('img');
    image.src = game.imageUrl;

    //creat butoane
    const newLine = document.createElement('p');

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.classList.add('js-edit-button');
    editBtn.setAttribute('data-game-id', game._id);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('js-delete-button');
    deleteBtn.setAttribute('data-game-id', game._id);

    newLine.append(editBtn, deleteBtn)

    wrapper.append(titlu, description, image, newLine);

    return wrapper;
}

function attachEventListeners() {
    // delegare de listener la document
    document.addEventListener('click', handleClick);

    function handleClick(e) {
        //salvam game id
        const gameId = e.target.getAttribute('data-game-id');
        //trebuie sa verificam daca evenimentul se declanseaza pe un element de tipul cautat de noi
        if (e.target.classList.contains('js-edit-button')) {
            handleEdit(gameId);
        } else if (e.target.classList.contains('js-delete-button')) {
            handleDelete(gameId);
        }
    }
}


function handleEdit(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Paul Test'
    })
        .then(res => res.json())
        .then(console.log)
}

function handleDelete(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(console.log);
}
