// immediately invoked function expression-prevent you from overiding global variables

// google how to convert hexcode into time, base 16

// event listener


(function() {
  'use strict';

  // let $container = document.querySelector('.container');
  // let $element = document.querySelector('span');

  // console.log($element);

  // $element.textContent = "Hello, Sally!";
  //
  //
  // let $variable = document.querySelector('#purple');
  //
  // console.log($variable.textContent);


// this is the same thing as what is abvoe
  // console.log(document.querySelector('#purple').textContent);

// new Date()

// set setTimeout

// set interval


// let currentTime;
// console.log(date);

// setInterval(function, ms);
  // setInterval(() => {
  //   currentTime = new Date();
  //   console.log(currentTime);
  // },1000);

//   let getCurrentTime = () => {
//     currentTime = new Date ();
//     console.log(currentTime);
//   }
//
//  setInterval(getCurrentTime, 1000);
//
//  let $button = document.querySelector('button');
//
//  $button.addEventListener('click', () => {
//  console.log('you clicked a button');
// });

// let $clock = document.querySelector('time');
// document.write(Date($clock));
// console.log($clock)
// let $clock = new Date();

// let $clock = setInterval(() => {
//   $clock = new Date();
// },1000);

// let $clock = new Date();

// let $clock = document.querySelector('time');

// let $clock = function getTime() {
//   getTime($clock)
//
//
//
// }


// document.querySelector('time').innerHTML = $clock;

// let currentTime = () => {
//   currentTime = new Date ();
//   console.log(currentTime);
// }


//   document.querySelector('time').innerHTML = hour + " : " + min + " : " + sec;
//
//   function currentTime() {
//     let t = setTimeout(function(){ currentTime() }, 1000);
//   }
//
//   currentTime();
//
// }



function currentTime() {
  let date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  // console.log(hour,min,sec);

  document.querySelector("time").innerText = hour + " : " + min + " : " + sec;
    // changes time to a hexcode
     let backgroundChange = ("#"+ hour + min +sec);
     // changes background to reflect the hexcode based on time
     document.body.style.background = backgroundChange;


    // ***************************************COVERTS SECONDS TO PIXEL WIDTH
    let timer = (sec/60);
    let width = timer * 500;
    let pixel = width + "px";

    // document.body.style.span = width;

    document.querySelector("#timerbar").style.width = pixel;

// ****************************************************attempted mouse over

//
//     let hexadecimal = ("#"+ hour + min +sec);
//
//     test.addEventListener("mouseenter", function( event ) {
//
//    event.target.style.innerHTML = hexadecimal;
//
//
//   setTimeout(function() {
//    event.target.style.color = "";
//  }, 500);
// }, false);






     setInterval(function(){ currentTime() }, 1000);

}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}




currentTime();






// $element.onmouseover




















})();
