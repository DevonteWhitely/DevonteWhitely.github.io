//All sounds were downloaded from -> https://mixkit.co/free-sound-effects/

let sounds = new Tone.Players({
  buzzer: 'media/Family-feud-buzzer.wav',
  whistle: 'media/mixkit-cartoon-toy-whistle-616.wav',
  laughter: 'media/mixkit-crowd-laugh-424.wav',
  birds: 'media/mixkit-little-birds-singing-in-the-trees-17.wav',
});

const delay = new Tone.FeedbackDelay('8n', 0.5);

let buttons = [];
let soundNames = ['buzzer', 'whistle', 'laughter', 'birds'];
let dSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(5, index * 50);
    buttons[index].mousePressed(() => playSound(word));
  });

  dSlider = createSlider(0, 1, 0.5, 0.05);
  dSlider.mouseReleased(() => {
    delay.delayTime = dSlider.value();
  });
}

function draw() {
  background(137, 207, 240);
  text('Press the buttons for sound.', 0, 200);
  text('Adjust the slider to increase/decrease audio delay.', 0, 390);
}

function playSound(whichSound) {
  sounds.player(whichSound).start();
}
