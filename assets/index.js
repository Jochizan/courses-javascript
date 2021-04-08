import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const d = document;
const $video = d.querySelector('video');
const $playButton = d.getElementById('playButton');
const $mutedButton = d.getElementById('mutedButton');

const player = new MediaPlayer({
  el: $video,
  plugins: [
    // new AutoPlay()
  ],
});

$playButton.onclick = () => player.togglePlay();
$mutedButton.onclick = () => player.toggleMuted();
