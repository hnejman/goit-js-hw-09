const e=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]'),l=document.querySelector(".form");let n=0;n=+e.value,l.addEventListener("submit",(e=>{e.preventDefault();for(let e=0;e<o.value;e++){let o=e;setTimeout(new Promise(((e,t)=>{Math.random()>.3?e():t()})).then((()=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((()=>{console.log(`❌ Rejected promise ${o} in ${n}ms`)})),n+=+t.value)}}));
//# sourceMappingURL=03-promises.8a728f3e.js.map
