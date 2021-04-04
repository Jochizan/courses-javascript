const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  const $description = d.getElementById('description');
  const $title = d.getElementById('title');
  const $table = d.getElementById('table');
  const $alert = d.getElementById('alert');
  const $btn = d.getElementById('add');

  const addTodo = () => {
    if ($title.value === '' || $description.value === '') {
      $alert.classList.remove('d-none');
      $alert.innerText = 'Title and description are required';
      return;
    } else {
      console.log('ok');
    }

    $alert.classList.add('d-none');
    const row = $table.insertRow();
    row.innerHTML = `
      <td>${$title.value}</td>
      <td>${$description.value}</td>
      <td class='text-center'>
        <input type='checkbox'>
      </td>
      <td class='text-right'>
        <button class='btn btn-primary mb-1'>
          <i class='fa fa-pencil'></i>
        </button>
        <button class='btn btn-danger mb-1 ml-1'>
          <i class='fa fa-trash'></i>
        </button>
      </td>
    `;

    $title.value = '';
    $description.value = '';
  };

  $btn.addEventListener('click', (e) => {
    addTodo();
  });
});
