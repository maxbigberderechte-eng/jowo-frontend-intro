
// 1. Elemente auswählen
// Formular über das Tag auswählen (da keine Klasse vorhanden ist)
const profileForm = document.querySelector('form');

// Inputs über ihre IDs auswählen
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const skillInput = document.querySelector('#skill'); // ID im HTML ist 'skill' (Singular)
const aboutInput = document.querySelector('#about');

// Card-Container und Text-Felder über ihre Klassen auswählen
const profileCard = document.querySelector('.card-profile');
const cardName = document.querySelector('.card-profile-item-name');
const cardEmail = document.querySelector('.card-profile-item-email');
const cardSkills = document.querySelector('.card-profile-item-skills');
const cardAbout = document.querySelector('.card-profile-item-description');
const cardMessageButton = document.querySelector('.card-profile-item-Massage');

// Standardmäßig die Profilkarte beim ersten Laden verstecken
profileCard.classList.add('hidden');

// 2. Event-Listener für das Absenden (Submit)
profileForm.addEventListener('submit', function(event) {
    // Verhindert das Neuladen der Seite
    event.preventDefault();

    // Werte aus den Inputs auslesen und in die Karte schreiben
    // Da E-Mail, Skills und Description ein <strong>-Tag enthalten, nutzen wir innerHTML
    cardName.textContent = nameInput.value;
    cardEmail.innerHTML = `<strong> E-Mail: </strong> ${emailInput.value}`;
    cardSkills.innerHTML = `<strong> Skills: </strong> ${skillInput.value}`;
    cardAbout.innerHTML = `<strong> Description: </strong> ${aboutInput.value}`;

    // Optional: Auch den "Message"-Link dynamisch mit der neuen E-Mail updaten
    cardMessageButton.href = `mailto:${emailInput.value}`;

    // Profilkarte sichtbar machen
    profileCard.classList.remove('hidden');
});

// 3. Event-Listener für das Zurücksetzen (Reset)
profileForm.addEventListener('reset', function() {
    // Profilkarte wieder verstecken
    profileCard.classList.add('hidden');
});

