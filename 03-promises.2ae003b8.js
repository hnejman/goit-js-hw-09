!function(){var e,n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]'),c=document.querySelector(".form"),u=0;u=+n.value,c.addEventListener("submit",(function(n){n.preventDefault();for(var c=0;c<t.value;c++)e=c,setTimeout((u+=+o.value,void new Promise((function(e,n){Math.random()>.3?e():n()})).then((function(){console.log("✅ Fulfilled promise ".concat(e," in ").concat(u,"ms"))})).catch((function(){console.log("❌ Rejected promise ".concat(e," in ").concat(u,"ms"))}))))}))}();
//# sourceMappingURL=03-promises.2ae003b8.js.map
