const d = document;
const $main = d.querySelector('main');

fetch('assets/javascript.md')
  .then((res) => (res.ok ? res.text() : Promise.reject(res)))
  .then((text) => {
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.error(err);
    let msg = err.statusText || 'Ocurrió un error';
    $main.innerHTML = `Error ${err.status}: ${msg}`;
  });