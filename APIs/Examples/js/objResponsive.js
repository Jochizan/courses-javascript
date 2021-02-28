const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }

    //console.log("MQ", breakPoint, e.matches);
  };

  //breakPoint.addListener(responsive);
  breakPoint.addEventListener("change", responsive); //Solución al deprecated
  responsive(breakPoint);
}
