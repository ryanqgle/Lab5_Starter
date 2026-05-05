// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  
  const voiceSelect = document.querySelector('#voice-select');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const textInput = document.querySelector('#text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
        break;
      }
    }

    synth.speak(utterThis);

    faceImage.src = 'assets/images/smiling-open.png';

    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
}