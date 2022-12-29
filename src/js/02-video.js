import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorageService from './localstorage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onSaveStorage, 1000));

function onSaveStorage(event) {
  // console.log(event.seconds);
  localStorageService.save('videoplayer-current-time', event.seconds);
  // console.log(localStorage.getItem('videoplayer-current-time'));
}

player
  .setCurrentTime(localStorageService.load('videoplayer-current-time'))
  .then(function (seconds) {
    // localStorageService.load('videoplayer-current-time');
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
