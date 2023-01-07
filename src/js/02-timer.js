import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selector = document.querySelector('[id="datetime-picker"]')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  flatpickr(selector, options);

const dataSet = selector.textContent;