'use strict';

const clock = document.getElementById('clock');
let hours = 23;
let minutes = 59;

minutes = minutes + 1;
if (minutes >= 60) {
  hours = hours + 1;

  if (hours == 24) {
    hours = 0;
  }
  minutes = 0;
}

if (minutes < 10) {
  minutes= `0${minutes}`;
}
if (hours < 10) {
  hours= `0${hours}`;
}

document.getElementById('clock').innerHTML = `${hours}:${minutes}`;