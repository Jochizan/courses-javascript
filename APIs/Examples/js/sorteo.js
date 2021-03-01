const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];
    console.log($players, random, winner);
    return `El ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

/*
 * Este codigo puede servir dentro de cualquier pagina web
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
  const random = Math.floor(Math.random() * $players.length);
  const winner = $players[random];
  console.log($players, random, winner);
  return `El ganador es ${winner.textContent}`;
};
*/
