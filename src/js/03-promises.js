const firstStep = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const form = document.querySelector(`.form`);

let delay = + firstStep.value;

function createPromise({position, delay}) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
 } )
  return promise;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  for(let i = 1; i < amount.value + 1; i++){
    setTimeout(createPromise({i, delay})
    .then(({ i, delay }) => {
      console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
    })
    .catch(({ i, delay }) => {
      console.log(`❌ Rejected promise ${i} in ${delay}ms`);
    }),
    delay = delay + + step. value)
    }
});