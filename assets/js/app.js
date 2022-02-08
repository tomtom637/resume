import translations from './translations.js';

let translationState = false;
const translationButton = document.getElementById('translation-button');
translationButton.addEventListener('click', translate);

function translate() {
  if(!translationState) {
    for(const property in translations) {
      document.querySelector(`[data-translation="${property}"]`).innerText = translations[property];
    }
    translationButton.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1600px-Flag_of_the_United_Kingdom.svg.png')`;
    translationState = true;
  } else {
    document.location.href="/";
  }
}