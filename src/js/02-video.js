import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorageService from './localstorage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});