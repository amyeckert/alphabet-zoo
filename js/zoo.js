
const animals = [
  {name: 'Axlotl', animalId: 65}, 
  {name: 'Baboon', animalId: 66}, 
  {name: 'Coyote', animalId: 67},
  {name: 'Donkey', animalId: 68},
  {name: 'elephant', animalId: 69},
  {name: 'frog', animalId: 70},
  {name: 'goat', animalId: 71},
  {name: 'hippopotamus', animalId: 72},
  {name: 'Isopod', animalId: 73},
  {name: 'Coyote', animalId: 74},
  {name: 'Coyote', animalId: 75},
  {name: 'Coyote', animalId: 76},
  {name: 'Coyote', animalId: 77},
  {name: 'Coyote', animalId: 78},
  {name: 'Coyote', animalId: 79},
  {name: 'Coyote', animalId: 80},
  {name: 'Coyote', animalId: 81},
  {name: 'Coyote', animalId: 82},
  {name: 'donkey', animalId: 83},
  {name: 'Coyote', animalId: 84},
  {name: 'Coyote', animalId: 85},
  {name: 'Coyote', animalId: 86},
  {name: 'Coyote', animalId: 87},
  {name: 'Coyote', animalId: 88},
  {name: 'Coyote', animalId: 89},
  {name: 'Coyote', animalId: 90},
  ];


// on keydown, play sound and change image and text
function playSoundAndChangeImage(e) {

  const keyCode = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  //stops the function if no audio data-key defined.
  if(!keyCode) return;
  //rewinds to the start of the sound file.
  keyCode.currentTime = 0;  
  //play() is a built in function that works wiht audio and video DOM elements
  keyCode.play(); 

  //if key typed in matched keycode of audio element add keyCode as class name to change bg image
  if(e.keyCode == `${e.keyCode}`) {
    const body = document.querySelector('body');
    body.classList = "";
    const id = `${e.keyCode}`;
    body.classList.add('bg' + id);

    //find  animal in animals array that has that id and print the name in the h1
    var whichAnimal = animals.filter(animal => `${animal.animalId}` === id);
    var displayName = whichAnimal.find(animal => `${animal.name}`);

    var text = document.querySelector('h1');
    text.innerHTML = displayName.name;
  }
}

window.addEventListener('keydown', playSoundAndChangeImage);

