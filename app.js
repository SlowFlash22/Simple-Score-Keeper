const t1 = {
    score: 0,
    button: document.querySelector('#t1Button'),
    display: document.querySelector('#t1P')
}//making a class of team1

const t2 = {
    score: 0,
    button: document.querySelector('#t2Button'),
    display: document.querySelector('#t2P')
}// class of team 2

const resetButt = document.querySelector('#reset');
const winScoreSelect = document.querySelector("#dropScore");
let winScore = 3;
let isGameOvr = false;

function updateScore(player, opponent) {
    if (!isGameOvr) {
        (player.score)++;
        if (player.score === winScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


t1.button.addEventListener('click', function () {
    updateScore(t1, t2)
});

t2.button.addEventListener('click', function () {
    updateScore(t2, t1)
});

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value); //parsing since this.value is a string
    reset();// resetting since we changed the winningScore, executing here itself(starts by itself) 
})

resetButt.addEventListener('click', reset); //not executing reset, only using it when we click(starts only when we click)

function reset() {
    isGameOvr = false;
    for (let t of [t1, t2]) {
        t.score = 0;
        t.display.textContent = t.score;
        t.display.classList.remove('has-text-success', 'has-text-danger');
        t.button.disabled = false;
    }
}