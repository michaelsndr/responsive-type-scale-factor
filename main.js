// tsf = type scale factor
let tsfAt320 = 1.2; // set factor for small screens
let tsfAt1200 = 1.375; // set factor for large screens
let tsfDelta = (tsfAt1200 - tsfAt320);
let tsfChangePerPX = tsfDelta / (1200 - 320);
let root = document.documentElement;

function calcTypeScaleFactor() {
  let viewport = window.innerWidth;
  let extraPX = viewport - 320;
  root.style.setProperty('--tsf', tsfAt320 + extraPX * tsfChangePerPX);
}

window.onload = calcTypeScaleFactor;
window.onresize = calcTypeScaleFactor;