import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputStartDataEl = document.querySelector('#datetime-picker');
const btnStartDataEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const currentTime = new Date();

btnStartDataEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= currentTime) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }

    btnStartDataEl.disabled = false;

    let timerId = null;

    btnStartDataEl.addEventListener('click', () => {
      timerId = setInterval(() => {
        const currentTimer = new Date(selectedDates[0]) - new Date();
        const currentDate = convertMs(currentTimer);

        daysEl.textContent = addLeadingZero(currentDate.days);
        hoursEl.textContent = addLeadingZero(currentDate.hours);
        minutesEl.textContent = addLeadingZero(currentDate.minutes);
        secondsEl.textContent = addLeadingZero(currentDate.seconds);

        if (currentTimer < 1000) {
          clearTimeout(timerId);
        }
      }, 1000);
    });
  },
};

flatpickr(inputStartDataEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
