const textarea = document.getElementById('spelltext');
const saveBtn = document.getElementById('saveBtn');

window.addEventListener ('load',() =>{
    const savedspell = localStorage.getItem('spell');
    if(savedspell)textarea.value = savedspell
});

saveBtn.addEventListener('click',() => {
    localStorage.setItem('spell',textarea.value);
    alert('spell saved!')
});

const openPopupBtn = document.getElementById('openPopupBtn');
const spellPopup = document.getElementById('spellPopup');
const closePopupBtn = document.getElementById('closePopupBtn');

openPopupBtn.addEventListener ('click', () => {
    spellPopup.classList.remove('hidden');
    loadSpellList();
});

closePopupBtn.addEventListener('click',() => {
    spellPopup.classList.add('hidden')
});

window.addEventListener('click',(e) =>{
    if(e.target === spellPopup) {
        spellPopup.classList.add('hidden');
    }
});
