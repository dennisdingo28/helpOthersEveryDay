checkExpire();

function preventSpam() {
    const date = new Date();
    const blocker = document.querySelector('.blocker');
    localStorage.setItem('cooldown', String(Date.now()));
    blocker.classList.remove('hidden');
    blocker.classList.add('flex');
    
    console.log(`Vei avea acces din nou maine la ora ${date.getHours()}`);
    checkExpire();
}

function checkExpire() {
    const date = new Date();

    const blocker = document.querySelector('.blocker');

    if (localStorage.getItem('cooldown')) {
        blocker.classList.remove('hidden');
        blocker.classList.add('flex');
        let checker = setInterval(() => {
            const previousTime = Number(localStorage.getItem('cooldown'));
            const currentTime = Date.now();

            const timeDifference = currentTime - previousTime;

            const dayDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (dayDiff>=1) {
                blocker.classList.add('hidden');
                blocker.classList.remove('flex');
                clearInterval(checker);
                localStorage.removeItem('cooldown');
            }
        }, 1000)
    }
}