let score =0;
const scoreCount = document.getElementById('score-count');
const gremlin = document.getElementById('gremlin');

function randomPosition(){
    const gremlinWidth = 80;
    const gremlinHeight = 60;
    const maxWidth = window.innerWidth - gremlinWidth;
    const maxHeight = window.innerHeight - gremlinHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    gremlin.style.left = `${randomX}px`;
    gremlin.style.top = `${randomY}px`;

    console.log(`X: ${randomX}, Y: ${randomY}`);


}

function showGremlin() {
    randomPosition();
    gremlin.style.display = 'block';

    setTimeout(() => {
         gremlin.style.display = 'none';
    }, 3000);

}

function scheduleGremlin(){

    const randomDelay = Math.floor(Math.random() * 30000) + 30000;
    setTimeout(() => {
        showGremlin();
        scheduleGremlin();
    }, randomDelay);
}

scheduleGremlin();


gremlin.addEventListener('click',() => {
    gremlin.style.display ='none';
    score++;
    scoreCount.textContent = score;
});