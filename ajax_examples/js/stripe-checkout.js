import STRIPE_KEYS from './stripe-keys.js';

const d = document;
const $ceviches = d.getElementById('ceviches');
const $template = d.getElementById('ceviche-template').content;
const $fragment = d.createDocumentFragment();

const headerOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

let prices, products;

const moneyFormat = (num) => `S/. ${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch('https://api.stripe.com/v1/products', headerOptions),
  fetch('https://api.stripe.com/v1/prices', headerOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      // console.log(productData);

      $template.querySelector('.ceviche').setAttribute('data-price', el.id);
      $template.querySelector('img').src = productData[0].images[0];
      $template.querySelector('img').alt = productData[0].name;
      $template.querySelector('figcaption').innerHTML = `
      ${productData[0].name}
      <br />
      ${moneyFormat(el.unit_amount_decimal)} ${el.currency.toUpperCase()}
    `;

      let clone = d.importNode($template, true);
      $fragment.appendChild(clone);
    });
    $ceviches.appendChild($fragment);
  })
  .catch((err) => {
    console.error(err);
    let message =
      err.statusText || 'Ocurrió un error al conectarse con la API de Stripe';
    $ceviches.innerHTML = `<p>Error ${err.status}: ${message}`;
  });

d.addEventListener('click', (e) => {
  if (e.target.matches('.ceviche *')) {
    let price = e.target.parentElement.getAttribute('data-price');
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: 'subscription',
        successUrl: 'http://127.0.0.1:5500/ajax_examples/assets/stripe-success.html',
        cancelUrl: 'http://127.0.0.1:5500/ajax_examples/assets/stripe-cancel.html'
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $ceviches.insertAdjacentHTML('afterend', res.error.message);
        }
      });
    // console.log(price);
    // alert('A comprar');
  }
});
