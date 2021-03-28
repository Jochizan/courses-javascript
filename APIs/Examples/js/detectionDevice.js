const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id);
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.ie() ||
        this.edge() ||
        this.opera() ||
        this.chrome() ||
        this.safari() ||
        this.firefox()
      );
    },
  };

  //console.log(ua);
  //console.log(isMobile.android());
  //console.log(isMobile.ios());
  //console.log(isMobile.any());
  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;

  /* Contenido Exclusivo */

  /* Por Navegador*/
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve para Chrome</mark></p>`;
  }
  if (isBrowser.safari()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve para Safari</mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve para Firefox</mark></p>`;
  }
  if (isBrowser.opera()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve para Opera</mark></p>`;
  }
  if (isBrowser.edge()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve para Edge</mark></p>`;
  }

  /* Por Sistema Operativo*/
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
  }

  /* Redirecciones */
  if (isMobile.android()) {
    location.href = "https://jonmircha.com";
  }
}
