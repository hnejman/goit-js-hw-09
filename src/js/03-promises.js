const firstStep = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const form = document.querySelector(`.form`);

let delay = + firstStep.value;

function createPromise() {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
 } )
  return promise;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  for(let i = 0; i < amount.value; i++){
    let position = i;
    setTimeout(createPromise()
    .then(() => {
      console.log.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
      console.log.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }),
    delay = delay + + step. value)
    }
});