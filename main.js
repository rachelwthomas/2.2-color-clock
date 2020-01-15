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

let $clock = new Date();

// setInterval(() => {
//   currentTime = new Date();
//   console.log(currentTime);
// },1000);
//
// let $clock = new Date ();

document.querySelector('time').innerHTML = $clock;

// let currentTime = () => {
//   currentTime = new Date ();
//   console.log(currentTime);
// }




















})();
