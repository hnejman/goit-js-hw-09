import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import throttle from "lodash.throttle";
const selector = document.querySelector('[id="datetime-picker"]');
const seconds = document.querySelector('[data-seconds]');
const minutes = document.querySelector('[data-minutes]');
const hours = document.querySelector('[data-hours]');
const days = document.querySelector('[data-days]');
const btn = document.querySelector('[data-start]');
const info = document.querySelector('[id="info"]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

let pickr = new flatpickr('[id="datetime-picker"]', options);

function setTime(comparator, seconds, minutes, hours, days, info){
  let date = new Date();
  date = date.getTime();
  console.log(comparator);
  console.log(date);
  if(comparator <= date){
    info.textContent = "chose date in the future";
    info.styles = "color: #ff6347"
  } else if(
    Math.floor(comparator/ 1000 ).toFixed(0) == Math.floor(date/ 1000 ).toFixed(0)
  ){
    info.textContent = "cutdown is over";
  } else {
  const result = comparator - date;
  seconds.textContent = Math.floor((result % 60000 )/ 1000 ).toFixed(0);
  minutes.textContent = Math.floor((result % 3600000 )/ 60000).toFixed(0);
  hours.textContent = Math.floor((result % 86400000) / 3600000).toFixed(0);
  days.textContent = Math.floor(result / 86400000).toFixed(0);
  }
}

btn.addEventListener("click", e=>{
  let dataSet = pickr.selectedDates[0];
  dataSet = dataSet.getTime();
  console.log(dataSet);
  setInterval(setTime, 1000, dataSet, seconds, minutes, hours, days, info);
})