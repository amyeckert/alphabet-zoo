
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
  {name: 'jaguar', animalId: 74},
  {name: 'kookaburra', animalId: 75},
  {name: 'lion', animalId: 76},
  {name: 'markhor', animalId: 77},
  {name: 'nightingale', animalId: 78},
  {name: 'otter', animalId: 79},
  {name: 'pig', animalId: 80},
  {name: 'quetzal', animalId: 81},
  {name: 'raven', animalId: 82},
  {name: 'saiga', animalId: 83},
  {name: 'tamarin', animalId: 84},
  {name: 'uromastix', animalId: 85},
  {name: 'vampire bat', animalId: 86},
  {name: 'wasp', animalId: 87},
  {name: 'xentarosaurus', animalId: 88},
  {name: 'yak', animalId: 89},
  {name: 'zebra', animalId: 90},
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

// I want the sound to stop playing on "keyup" event add event listener
function stopSound(e) {
  keyCode.currentTime = 0; 
}
// I want the image to fade in/out quickly, so the screen is not blank for a split second. 

//text transformations and transitions

window.addEventListener('keydown', playSoundAndChangeImage);
// window.addEventListener('keyup', stopSound);

