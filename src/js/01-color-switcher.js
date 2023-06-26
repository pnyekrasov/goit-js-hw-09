const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const backgroundColorBodyEl = document.querySelector('body');

let timerIntervalId = null;

btnStartEl.addEventListener('click', () => {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
    timerIntervalId = setInterval(() => {
           backgroundColorBodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000)        
});

btnStopEl.addEventListener('click', () => {
      btnStartEl.disabled = false;
    btnStopEl.disabled = true; 
  clearInterval(timerIntervalId);
  
   
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

