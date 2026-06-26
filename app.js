
const card = document.querySelector('.profile-card')
card.classList.add('hidden')

const form = document.querySelector('.profile-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const skillsInput = document.querySelector('#skills');
const aboutInput = document.querySelector('#about');

const cardName = document.querySelector('.profile-card-heading');
const cardEmail = document.querySelector('.profile-card-email');
const cardSkills = document.querySelector('.profile-card-skills');
const cardAbout = document.querySelector('.profile-card-about');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(nameInput.value);

  cardName.textContent = nameInput.value
  cardEmail.textContent = emailInput.value

  cardSkills.innerHTML = `<strong>Skills:</strong> ${
    skillsInput.value
  }`;

  cardAbout.textContent =
    aboutInput.value

  card.classList.remove('hidden')
});

form.addEventListener('reset', (e) => {  
  card.classList.add('hidden')
});

#todo: abändern auf meins