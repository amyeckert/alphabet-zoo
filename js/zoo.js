//define the functions needed first
// document.addEventListener("DOMContentLoaded", function(event) {
// // console.log("DOM fully loaded and parsed");
// });

// function removeTransition (e) {
// 	if (e.propertyName !== 'transform') return; //skip if no transform property in css
// 	e.target.classList.remove('playing'); //removes class added in event listener
// }

// function changeImage(e) {
// 	const body = document.querySelector('body');
// 	body.style.backgroundImage= 'url(../'
// 	console.log(body);

// }

// function playSound(e) {
// 	const animalSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	animal.classList.add('playing'); //adds class, in jQuery same as key.addClass('playing')
// 	if(!audio) return; //stops the function if no audio data-key corresponding to the keyCode number
	
// 	audio.currentTime = 0; //rewinds to the start of the sound file. 
// 	audio.play(); //play() is a built in function that works wiht audio and video DOM elements
// }
window.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
});
  // function removeTransition(e) {
  //   if (e.propertyName !== 'transform') return;
  //   e.target.classList.remove('playing');
  // }

  // function playSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   if (!audio) return;

  //   key.classList.add('playing');
  //   audio.currentTime = 0;
  //   audio.play();
  // }

  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // window.addEventListener('keydown', playSound);






// function playSound(e) {
// 	//audio looks for the audio element where data-key attribute is defined
// 	//key looks for an element with the class=key, with the data-key defined
// 	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

// //create an array of all DOM elements with class='key'
// const animals = Array.from(document.querySelectorAll('.animal'));
// //loop over the array of all keys and add event listener to each key
// animals.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(keys);

// window.addEventListener('keydown', playSound);