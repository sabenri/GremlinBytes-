const phrases = [
    "Byte-sized chaos",
    "gremlin-coded. Candy-coated",
    "powered by candy and bugs"
];

const element = document.querySelector(".tagline");
let phraseIndex = 0;
let cardIndex = 0;
let isDeleting = False;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.slice(0, charIndex);
    element.textContent = currentText;

    if(!isDeleting) {
        if (charIndex < currentPhrase.length) {
            charIndex++;
        } else{
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    const speed = isDeleting ? 40 : 80;
    setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', typeEffect);
