// create array of animal names to display in the h1
// const animalNames = ['Axlotl', 'Baboon', 'Coyote', 'Donkey', 'Elephant', 'Falcon', 'Goat'
//   // [66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],
//   ];

const animals = [
  {name: 'Axlotl', animalId: 65}, 
  {name: 'Baboon', animalId: 66}, 
  {name: 'Coyote', animalId: 67}
  ];


// function getAnimalId(animal) {
//   var id = 0;
//   return animal.animalId === id; 
// }
// console.log(animals.find(getAnimalId));


// on keydown, play sound and change image and text
function playSoundAndChangeImage(e) {

  const keyCode = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(!keyCode) return; //stops the function if no audio data-key defined.
  keyCode.currentTime = 0; //rewinds to the start of the sound file. 
  keyCode.play(); //play() is a built in function that works wiht audio and video DOM elements

  //add keyCode as class name to change bg image.
  if(e.keyCode == `${e.keyCode}`) {
    const body = document.querySelector('body');
    body.classList = "";
    const id = `${e.keyCode}`;
    body.classList.add('bg' + id);
    // console.log(audio, newImage);
  }
const whichAnimal = animals.filter(animal => (animals.name === 'Baboon'));
console.table(animals, whichAnimal);

}

window.addEventListener('keydown', playSoundAndChangeImage);
    