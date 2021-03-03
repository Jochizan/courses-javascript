const d = document;

(() => {
  const $fetch = d.getElementById("fetch");
  const $fragment = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      console.log(
        "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
      );
    });
})();
