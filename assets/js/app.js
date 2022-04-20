import translations from './translations.js';

let translationState = false;
const originalTranslations = {};

const translationButton = document.getElementById('translation-button');
translationButton.addEventListener('click', translate);

function translate() {
  if (!translationState) {
    for (const property in translations) {
      originalTranslations[property] = document.querySelector(`[data-translation="${property}"]`).innerText;
      document.querySelector(`[data-translation="${property}"]`).innerHTML = translations[property];
    }
    translationButton.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1600px-Flag_of_the_United_Kingdom.svg.png')`;
    translationState = true;
  } else {
    for (const property in originalTranslations) {
      document.querySelector(`[data-translation="${property}"]`).innerText = originalTranslations[property];
    }
    translationButton.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1599px-Flag_of_France.svg.png')`;
    translationState = false;
  }
}

const printButton = document.getElementById('print');
printButton.addEventListener('click', () => window.print());