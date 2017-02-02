// const animalNames = ['Axlotl', 'Baboon', 'Coyote', 'Donkey', 'Elephant', 'Falcon', 'Goat'
//   // [66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],
//   ];

// create array of animal names to display in the h1
const animals = [
  {name: 'Axlotl', animalId: 65}, 
  {name: 'Baboon', animalId: 66}, 
  {name: 'Coyote', animalId: 67}
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
    const animalId = animals.map(animal => `${animal.animalId}`);
    const animalName = animals.map(animal => `${animal.name}`);

    const whichAnimal = animals.filter(animal => `${animal.animalId}` === id);


    var displayName = document.querySelector('h1');
    displayName.innerHTML = 'name of animal';

    console.log(whichAnimal);
  }
}

window.addEventListener('keydown', playSoundAndChangeImage);

