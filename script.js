const loader = document.getElementById('loader');
const loadingText = document.getElementById('loading-text');
const loadingPercentage = document.getElementById('loading-percentage');

const images = [
  'loading-1.jpg',
  'loading-2.jpg',
  'loading-3.jpg',
  'loading-4.jpg'
];

const texts = [
  'Drawing the outlines...',
  'Adding colors...',
  'Finishing touches...',
  'Done!'
];

let progress = 0;

function updateLoader() {
  progress += 1;

  loadingPercentage.textContent = `${progress}%`;

  // Update background and text
  if (progress <= 25) {
    loader.style.backgroundImage = `url(${images[0]})`;
    loadingText.textContent = texts[0];
  } else if (progress <= 50) {
    loader.style.backgroundImage = `url(${images[1]})`;
    loadingText.textContent = texts[1];
  } else if (progress <= 75) {
    loader.style.backgroundImage = `url(${images[2]})`;
    loadingText.textContent = texts[2];
  } else {
    loader.style.backgroundImage = `url(${images[3]})`;
    loadingText.textContent = texts[3];
  }

  if (progress < 100) {
    setTimeout(updateLoader, 50);
  } else {
    // Slide loader up when done
    loader.style.transform = 'translateY(-100%)';
  }
}

// Start loading
updateLoader();
