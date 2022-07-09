let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('score');
let score = 0;

plus.addEventListener('click', () => {
    score++;
    output.innerHTML = score;
});

minus.addEventListener('click', () => {
    score--;
    output.innerHTML = score;
});

reset.addEventListener('click', () => {
    score = 0;
    output.innerHTML = score;
    output.style.color = 'white';
});