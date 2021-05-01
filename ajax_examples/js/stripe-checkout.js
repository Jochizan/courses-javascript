import STRIPE_KEYS from './stripe-keys.js';

// console.log(STRIPE_KEYS);

const d = document;
const $tacos = d.getElementById('ceviches');
const $template = d.getElementById('ceviche-template').content;
const $fragment = d.createDocumentFragment();

fetch('https://api.stripe.com/v1/products', {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`
  }
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });

fetch('https://api.stripe.com/v1/prices', {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`
  }
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
