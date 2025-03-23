// Your code here
fetch ("http://localhost:3000/characters")

.then (response => response.json())
.then (data => {
    data.forEach(character => {
        const span = document.createElement("span");
        span.textContent = character.name;
        span.addEventListener("click", () => displayCharacter(character));
        document.getElementById("character-bar").appendChild(span);
    });
});

function displayCharacter(character) {
    document.getElementById("name").textContent = character.name;
    document.getElementById("image").src = character.image;
    document.getElementById("vote-count").textContent = character.votes;
    clickedCharacter = character;
}

let clickedCharacter;

document.getElementById("votes-form").addEventListener("submit",(event) => {
    event.preventDefault();
    const addedVotes = parseInt(document.getElementById("votes").value);
    if (!isNaN(addedVotes)) {
        clickedCharacter.votes += addedVotes;
        document.getElementById("vote-count").textContent = clickedCharacter.votes;
        event.target.reset();
    }
});

document.getElementById("reset-btn").addEventListener("click", () => {
    clickedCharacter.votes = 0;
    document.getElementById("vote-count").textContent = 0;
});