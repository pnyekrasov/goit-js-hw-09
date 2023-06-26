const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const backgroundColorBodyEl = document.querySelector('body');
// const btnEls = document.querySelectorAll('button');
// console.log(btnEls);
// btnEls.classList.toggle('buttonPos')
// buttonPos.style.margin = "auto";


btnStartEl.addEventListener('click', () => {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
      timerIntervalId = setInterval(() => {
           backgroundColorBodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000)        
});

btnStopEl.addEventListener('click', () => {
    clearInterval(timerIntervalId);
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;    
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}