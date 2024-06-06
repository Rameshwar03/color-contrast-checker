'use strict';

let btnPickr = 0;
let btn2 = 0;
let l1 = 0.2126 * 244 + 0.7152 * 193 + 0.0722 * 148,
  l2 = 0.2126 * 34 + 0.7152 * 34 + 0.0722 * 34;

checker(l1, l2);

function button1(e) {
  btnPickr = 1;
}
function button2(e) {
  btnPickr = 0;
}
/////////////////////
///PICKER SECTION ///
/////////////////////

var colorBlock = document.getElementById('color-block');
var ctx1 = colorBlock.getContext('2d');
var width1 = colorBlock.width;
var height1 = colorBlock.height;

var colorStrip = document.getElementById('color-strip');
var ctx2 = colorStrip.getContext('2d');
var width2 = colorStrip.width;
var height2 = colorStrip.height;

var colorLabel = document.querySelector('.checker-left');

var x = 0;
var y = 0;
var drag = false;
var rgbaColor = '#1a759f';

ctx1.rect(0, 0, width1, height1);
fillGradient();

ctx2.rect(0, 0, width2, height2);
var grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx2.fillStyle = grd1;
ctx2.fill();

function click(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageData = ctx2.getImageData(x, y, 1, 1).data;

  rgbaColor =
    'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  fillGradient();
}

function fillGradient() {
  ctx1.fillStyle = rgbaColor;
  ctx1.fillRect(0, 0, width1, height1);

  var grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);
  grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
  ctx1.fillStyle = grdWhite;
  ctx1.fillRect(0, 0, width1, height1);

  var grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);
  grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
  ctx1.fillStyle = grdBlack;
  ctx1.fillRect(0, 0, width1, height1);
}

function mousedown(e) {
  drag = true;
  changeColor(e);
}

function mousemove(e) {
  if (drag) {
    changeColor(e);
  }
}

function mouseup(e) {
  drag = false;
}

// Minimum contrast for Small text at least 4.5:1
//       Larger text at least 3:1
// Maximum contrast for Small text : at least 7:1
//     Larger text : at least 4.5:1

function checker(l1, l2) {
  let c;
  c = (l1 * 1 + 0.5) / (l2 * 1 + 0.5);
  // console.log(c);
  if (c >= 4.5 && c <= 7) {
    document.querySelector('.aaN').textContent = 'Pass ✔️✔️';
  } else {
    document.querySelector('.aaN').textContent = 'Fail ❌❌';
  }
  if (c >= 3) {
    document.querySelector('.aaE').textContent = 'Pass ✔️✔️';
  } else {
    document.querySelector('.aaE').textContent = 'Fail ❌❌';
  }
  if (c >= 7) {
    document.querySelector('.aaaN').textContent = 'Pass ✔️✔️';
  } else {
    document.querySelector('.aaaN').textContent = 'Fail ❌❌';
  }
  if (c >= 4.5) {
    document.querySelector('.aaaE').textContent = 'Pass ✔️✔️';
  } else {
    document.querySelector('.aaaE').textContent = 'Fail ❌❌';
  }
}

function changeColor(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageData = ctx1.getImageData(x, y, 1, 1).data;
  var rgbaColor =
    'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';

  // let temp = [];
  // let temp2 = [];
  // Contrast = (L1 + 0.05) / (L2 + 0.05)
  // L = 0.2126 ́ R+0.7152 ́G+0.0722 ́B.
  if (btnPickr === 1) {
    document.querySelector('.checker-left').style.backgroundColor = rgbaColor;
    // temp[0] = imageData[0] * 1;
    // temp[1] = imageData[0] * 1;
    // temp[2] = imageData[2] * 1;
    l1 = 0.2126 * imageData[0] + 0.7152 * imageData[1] + 0.0722 * imageData[2];
    //console.log(imageData[0] + ' ' + imageData[1] + ' ' + imageData[2]);
    // checker(l1, l2);
  } else {
    document.querySelector('.left-heading').style.color = rgbaColor;
    document.querySelector('.left-para').style.color = rgbaColor;
    document.querySelector('.left-author').style.color = rgbaColor;
    // temp2[0] = imageData[0] * 1;
    // temp2[1] = imageData[1] * 1;
    // temp2[2] = imageData[2] * 1;
    l2 = 0.2126 * imageData[0] + 0.7152 * imageData[1] + 0.0722 * imageData[2];
    //console.log(imageData[0] + ' ' + imageData[1] + ' ' + imageData[2]);
    // checker(l1, l2);
  }
  checker(l1, l2);
}

colorStrip.addEventListener('click', click, false);

colorBlock.addEventListener('mousedown', mousedown, false);
colorBlock.addEventListener('mouseup', mouseup, false);
colorBlock.addEventListener('mousemove', mousemove, false);

const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
const btnsshowModal = document.querySelectorAll('.show-modal');
const btnscloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  // openbtn.classList.add('hidden1');
};

for (let i = 0; i < btnsshowModal.length; i++) {
  document;
  btnsshowModal[i].addEventListener('click', openModal);
  btnscloseModal.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

// var slider = document.getElementById('myRange');
// slider.oninput = function () {
//   document.getElementById('slider-input').textContent = this.value;
// };
