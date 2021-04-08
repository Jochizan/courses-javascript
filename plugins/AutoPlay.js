function Autoplay() {}

Autoplay.prototype.run = function (player) {
  player.muted();
  player.play();
};

export default Autoplay;
