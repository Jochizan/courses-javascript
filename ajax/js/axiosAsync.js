const d = document;

(() => {
  const $axiosAsync = d.getElementById("axios-async");
  const $fragment = d.createDocumentFragment();

  const getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let json = await res.data;
      console.log(res, json);
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Esto siempre se ejecutara");
    }
  };
  getData();
})();
