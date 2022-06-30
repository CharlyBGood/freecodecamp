const textDisplay = document.getElementById("typewriter");
const phrazes = ["Hello, welcome!", "I'm Charly BGood", "Thanks for coming..."];

let i = 0;
let j = 0;
let currentPhraze = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhraze.join('');

    if (i < phrazes.length) {

        if (!isDeleting && j <= phrazes[i].length) {
            currentPhraze.push(phrazes[i][j]);
            j++;
            textDisplay.innerHTML =currentPhraze.join('');
        }

        if (isDeleting && j <= phrazes[i].length) {
            currentPhraze.pop(phrazes[i][j]);
            j--;
            textDisplay.innerHTML =currentPhraze.join('');
        }

        if (j == phrazes[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhraze = [];
            isDeleting = false;
            i++;
            if (i == phrazes.length) {
                i = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 120;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();