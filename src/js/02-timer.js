import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputStartDataEl = document.querySelector('#datetime-picker');

const btnStartDataEl = document.querySelector('button[data-start]');

flatpickr(inputStartDataEl, {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates) {
console.log(selectedDates[0]);
},
});
