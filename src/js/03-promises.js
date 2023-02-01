import Notiflix from "notiflix";
const firstStep = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const form = document.querySelector(`.form`);
let del;
let count;

function createPromise(count, del) {
  setTimeout(()=>{
    new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    })
    .then(() => {
       console.log(`✅ Fulfilled promise ${count} in ${del}ms`);
       Notiflix.Notify.success(`✅ Fulfilled promise ${count} in ${del}ms`);
    })
    .catch(() => {
      console.log(`❌ Rejected promise ${count} in ${del}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${count} in ${del}ms`);
    })
  }, del)
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let stepInt = 0; 
  stepInt = + step.value;
  let firstStepInt = 0;
  firstStepInt = + firstStep.value;
  for(let i = 0; i < amount.value; i++){
    count = i;
    del = firstStepInt + (i * stepInt);
    createPromise(count, del);
  }
});