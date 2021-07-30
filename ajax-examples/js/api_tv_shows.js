const d = document;
const $shows = d.getElementById('shows');
const $template = d.getElementById('show-template').content;
const $fragment = d.createDocumentFragment();

d.addEventListener('keypress', async (e) => {
  if (e.target.matches('#search')) {
    console.log(e.target.value);
    if (e.key === 'Enter') {
      try {
        $shows.innerHTML = `<img class='loader' src='./assets/spinner.svg' alt='Cargando...' />`;

        let query = e.target.value.toLowerCase();
        let api = `http://api.tvmaze.com/search/shows?q=${query}`;
        let res = await fetch(api);
        let json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.length === 0 || !Object.keys(json).length) {
          $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de búsqueda: <mark>${query}</mark></h2>`;
        } else {
          json.forEach((el) => {
            console.log();
            $template.querySelector('#title').textContent = el.show.name;
            $template.querySelector('div').innerHTML = el.show.summary
              ? el.show.summary
              : '<p>Sin descripción</p>';
            $template.querySelector('img').src = el.show.image
              ? el.show.image.medium
              : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
            $template.querySelector('img').alt = el.show.name;
            $template.querySelector('a').href = el.show.url ? el.show.url : '#';
            $template.querySelector('a').target = el.show.url
              ? '_blank'
              : '_self';
            $template.querySelector('a').textContent = el.show.url
              ? 'ver más...'
              : '';

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });

          $shows.innerHTML = '';
          $shows.appendChild($fragment);
        }
      } catch (err) {
        console.error(err);

        let message = err.statusText || 'Ocurrió un error';
        $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
  }
});
