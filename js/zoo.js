// create array of animal names to display in the h1
const animalNames = ['Axlotl', 'Baboon', 'Coyote', 'Donkey', 'Elephant', 'Falcon', 'Goat'
  // [66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],[66, 'Baboon'],
  ];

  var animals = [
    {
    newImage: 'bg65',
    animal: 'Axlotl',
    sound: 
  }, {
     newImage: 'bg90',
      animal: 'Coyote'
  }];

  const sound = document.querySelector(`audio[src]`); //can I do this? 

// on keydown, play sound and change image, and text?
function playSoundAndChangeImage(e) {
  console.log(animalNames);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(!audio) return; //stops the function if no audio data-key defined.
  audio.currentTime = 0; //rewinds to the start of the sound file. 
  audio.play(); //play() is a built in function that works wiht audio and video DOM elements
  //add keyCode as class name to change bg image.
  if(e.keyCode == `${e.keyCode}`) {
    var body = document.querySelector('body');
    body.classList = "";
    var newImage = `${e.keyCode}`;
    body.classList.add('bg' + newImage);
    // console.log(audio, newImage);
  }
}

window.addEventListener('keydown', playSoundAndChangeImage);
    