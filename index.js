"use strict";

var timeInSecs;
var ticker;

function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()", 1000);
}

function tick() {
  var secs = timeInSecs;
  if (secs > 0) {
    timeInSecs--;
  } else {
    clearInterval(ticker);
    startTimer(5 * 60); // 4 minutes in seconds
  }

  var mins = Math.floor(secs / 60);
  secs %= 60;
  var pretty =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

  document.getElementById("countdown").innerHTML = pretty;
}

startTimer(10 * 60); // 10 minutes in seconds

// Home Count
let homeCount = 0;
let homeEl = document.getElementById("home-el");

function homeAddOne() {
  homeCount += 1;
  homeEl.textContent = homeCount;
}

function homeAddTwo() {
  homeCount += 2;
  homeEl.textContent = homeCount;
}

function homeAddThree() {
  homeCount += 3;
  homeEl.textContent = homeCount;
}

//Period Count
let periodCount = 0;
let periodEl = document.getElementById("period-el");

function periodAddOne() {
  periodCount += 1;
  periodEl.textContent = periodCount;
}

function periodMinusOne() {
  periodCount -= 1;
  periodEl.textContent = periodCount;
}

//Away Count
let awayCount = 0;
let awayEl = document.getElementById("away-el");

function awayAddOne() {
  awayCount += 1;
  awayEl.textContent = awayCount;
}

function awayAddTwo() {
  awayCount += 2;
  awayEl.textContent = awayCount;
}

function awayAddThree() {
  awayCount += 3;
  awayEl.textContent = awayCount;
}

//Home Foul
let foulHome = 0;
let foulHomeEl = document.getElementById("foul1-el");

let homey = function () {
  foulHome += 1;
  foulHomeEl.textContent = foulHome;
  document.getElementById("player-el").textContent = foulHome + foulAway;
};

//Away Foul
let foulAway = 0;
let foulAwayEl = document.getElementById("foul2-el");

let awey = function () {
  foulAway += 1;
  foulAwayEl.textContent = foulAway;
  document.getElementById("player-el").textContent = foulHome + foulAway;
};
