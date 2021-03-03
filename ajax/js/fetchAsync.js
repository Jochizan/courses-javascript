const d = document;

(() => {
  const $fetchAsync = d.getElementById("fetch-async");
  const $fragment = d.createDocumentFragment();
  const getData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/user");
      let json = await res.json();

      // if (!res.ok) throw new Error("Ocurrió un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      console.log(res, json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log("Hubo un error: ", err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log(
        "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
      );
    }
  };
  getData();
})();
