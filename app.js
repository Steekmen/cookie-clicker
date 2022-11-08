let score = 0;
const showScore = document.getElementById("score")

function countScore() {
    score++;
    showScore.textContent = score;

    if (score > 49) {
        score++;
    }
}

function autoScore() {
    if (score > 149) {
        setInterval(countScore, 1000);
        score = score - 150;
        showScore.textContent = score;
    }
}


