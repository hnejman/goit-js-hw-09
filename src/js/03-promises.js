const firstStep = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const form = document.querySelector(`.form`);
    let delay = 0;
    delay = + firstStep.value;
    let position;

function createPromise() {
  delay = delay + + step. value;
  
  new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
 })
 .then(() => {
     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(() => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })
}

form.addEventListener("submit", e => {
  e.preventDefault();
  for(let i = 0; i < amount.value; i++){
    position = i;
    setTimeout(createPromise())
  }
});