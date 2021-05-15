import STRIPE_KEYS from './stripe-keys.js';

const d = document;
const $ceviches = d.getElementById('ceviches');
const $template = d.getElementById('ceviche-template').content;
const $fragment = d.createDocumentFragment();

const headerOptions = {
  headers: {
    Authorization: `Bearer ${ STRIPE_KEYS.secret }`
  }
};

let prices, products;

Promise.all(
  [
    fetch('https://api.stripe.com/v1/products', headerOptions),
    fetch('https://api.stripe.com/v1/prices', headerOptions)
  ]
).then((responses) =>
  Promise.all(responses.map((res) => res.json()))
).then((json) => {
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
      ${ productData[0].name }
      <br />
      ${ el.unit_amount_decimal } ${ el.currency.toUpperCase() }
    `;

    let clone = d.importNode($template, true);
    $fragment.appendChild(clone);
  });
  $ceviches.appendChild($fragment);
}).catch((err) => {
  console.error(err);
  let message = err.statusText || 'Ocurrió un error al conectarse con la API de Stripe';
  $ceviches.innerHTML = `<p>Error ${ err.status }: ${ message }`;
});
