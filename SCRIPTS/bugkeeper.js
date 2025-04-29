let stats = {
    hungry:10,
    happy:10,
    sleep:10,
};

function updateStats() {
    for (const stat in stats) {
        document.getElementById(stat).textContent = stats[stat];
    }
}

function feedpet() {
    stats.hungry = Math.min(10, stats.hungry + 2);
    stats.sleep = Math.max(0, stats.sleep - 1);
    updateStats();
    checkGameover();
}

function petbug() {
    stats.happy = Math.min(10, stats.happy + 2);
    stats.sleep = Math.max(0, stats.sleep - 2);
    stats.hungry = Math.min(10, stats.hungry + 1) 
    updateStats();
    checkGameover();
}


    function nap() {
        stats.sleep = Math.min (10, stats.sleep + 3);
        updateStats();
        checkGameover();
    }

    function decayStats () {
        stats.happy = Math.max(0, stats.happy - 1);
        stats.hungry = Math.max(0, stats.hungry - 1);
        stats.sleep = Math.max(0, stats.sleep - 1);
        updateStats();
        checkGameover();
    }

    function checkGameover () {
        if (stats.hungry === 0 || stats.happy === 0 || stats.sleep === 0){
            alert ('your bug needs you!');
            clearInterval(gameLoop)
        }
    }

    updateStats ();

    const gameLoop = setInterval(decayStats, 5000);