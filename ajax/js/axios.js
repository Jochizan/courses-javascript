const d = document;
(() => {
  const $axios = d.getElementById("axios");
  const $fragment = d.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then((res) => {
      console.log(res);
      res.data.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => console.log("Esto siempre se ejecuta"));
})();
