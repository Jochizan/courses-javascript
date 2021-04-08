function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.__initPlugins();
}

MediaPlayer.prototype.__initPlugins = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.muted = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unMuted = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMuted = function () {
  this.media.muted = !this.media.muted;
};

export default MediaPlayer;
