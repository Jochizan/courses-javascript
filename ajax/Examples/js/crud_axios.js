const d = document;
const $table = d.querySelector('.crud-table');
const $form = d.querySelector('.crud-form');
const $title = d.querySelector('.crud-title');
const $template = d.getElementById('crud-template').content;
const $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await axios.get('http://localhost:3000/santos');
    let json = await res.data;

    console.log(json);
    json.forEach((el) => {
      $template.querySelector('.name').textContent = el.nombre;
      $template.querySelector('.constellation').textContent = el.constelacion;
      $template.querySelector('.edit').dataset.id = el.id;
      $template.querySelector('.edit').dataset.name = el.nombre;
      $template.querySelector('.edit').dataset.constellation = el.constelacion;
      $template.querySelector('.delete').dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector('tbody').appendChild($fragment);
  } catch (err) {
    let message = err.statusText || 'Ocurrió un error';
    $table.insertAdjacentHTML(
      'afterend',
      `<p>Error ${err.status}: ${message}</p>`
    );
  }
};

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      try {
        let options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
          })
        };
        let res = await axios('http://localhost:3000/santos', options);
        let json = await res.data;

        console.log(json);
        location.reload();
      } catch (err) {
        let message = err.statusText || 'Ocurrió un error';
        $form.insertAdjacentHTML(
          'afterend',
          `<p>Error: ${err.status}: ${message}</p>`
        );
      }
    } else {
      // Update - PUT
      try {
        let options = {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
          })
        };
        let res = await axios(
          `http://localhost:3000/santos/${e.target.id.value}`,
          options
        );
        let json = await res.json();

        console.log(json);
        location.reload();
      } catch (err) {
        let message = err.statusText || 'Ocurrió un error';
        $form.insertAdjacentHTML(
          'afterend',
          `<p>Error: ${err.status}: ${message}</p>`
        );
      }
    }
  }
});

d.addEventListener('click', async (e) => {
  if (e.target.matches('.edit')) {
    // alert('Presionaste el botón Editar');
    $title.textContent = 'Editar santo';
    $form.id.value = e.target.dataset.id;
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
  }
  if (e.target.matches('.delete')) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}`
    );

    if (isDelete) {
      // Delete -- DELETE
      try {
        let options = {
          method: 'DELETE'
        };
        let res = await axios(
          `http://localhost:3000/santos/${e.target.dataset.id}`,
          options
        );
        let json = res.data;

        console.log(json);
        location.reload();
      } catch (err) {
        let message = err.statusText || 'Ocurrió un error';
        alert(`Error: ${err.status}: ${message}`);
      }
    }
  }
});
