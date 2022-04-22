import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(savePlayerValueTimer, 1000));

function savePlayerValueTimer(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
