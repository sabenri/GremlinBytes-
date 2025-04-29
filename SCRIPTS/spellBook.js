const spellNameInput = document.getElementById('spellName');
const textarea = document.getElementById('spelltext');
const saveBtn = document.getElementById('saveBtn');

const openPopupBtn = document.getElementById('openPopupBtn');
const spellPopup = document.getElementById('spellPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const savedSpellsList = document.getElementById('savedSpellsList');

function loadSpellList() {
  savedSpellsList.innerHTML = '';
  const spells = JSON.parse(localStorage.getItem('spells') || '{}');

  Object.keys(spells).forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='❌';
    deleteBtn.classList.add('delete-spell');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        delete spells[name];
        localStorage.setItem('spells', JSON.stringify(spells));
        loadSpellList();
    });

    li.addEventListener('click',() => {
        spellNameInput.value = name;
        textarea.value = spells[name];
        spellPopup.classList.add('hidden');
    });
   li.appendChild(deleteBtn);
   savedSpellsList.appendChild(li);
  });
}

saveBtn.addEventListener('click', () => {
  const name = spellNameInput.value.trim();
  const content = textarea.value.trim();

  if (!name || !content) {
    alert('Please name your spell and write something!');
    return;
  }

  const spells = JSON.parse(localStorage.getItem('spells') || '{}');
  spells[name] = content;
  localStorage.setItem('spells', JSON.stringify(spells));

  alert(`"${name}" has been saved! ✨`);

  spellNameInput.value = '';
  textarea.value = '';
});

openPopupBtn.addEventListener('click', () => {
  spellPopup.classList.remove('hidden');
  loadSpellList();
});

closePopupBtn.addEventListener('click', () => {
  spellPopup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === spellPopup) {
    spellPopup.classList.add('hidden');
  }
});

window.addEventListener('load', () => {
  const lastSpells = JSON.parse(localStorage.getItem('spells') || '{}');
  const names = Object.keys(lastSpells);
  if (names.length > 0) {
    const last = names[names.length - 1];
    spellNameInput.value = last;
    textarea.value = lastSpells[last];
  }
});
