// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('#horn-select');
  const volumeControl = document.querySelector('#volume');
  const playButton = document.querySelector('button');
  const hornImage = document.querySelector('img');
  const audioElement = document.querySelector('audio');

  let horn = [];

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
  
    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    } else {
      hornImage.src = 'assets/images/no-image.png';
      audioElement.src = '';
    }
  });
  
  volumeControl.addEventListener('input', () => {
    const volumeValue = volumeControl.value;
    audioElement.volume = volumeValue / 100; /* in html, min = 0, max = 100 */
    if (volumeValue == 0) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-1.svg'; 
    } else if (volumeValue >= 33 && volumeValue < 67) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-2.svg';
    } else {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}