// import functions and grab DOM elements
const questionSection = document.getElementById('question-section');
const sillyQuestions = document.getElementById('silly-questions');
const iSeekTheEye = document.getElementById('I-seek-the-Eye-of-Magnus');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const inGame = document.getElementById('in-game');
const epicQuotes = document.getElementById('epic-quotes');


// let state
const answers = [
  'The trial awaits. Are you now prepared?',
'Arrogance will serve you poorly.',
'Step into the light, and your test begins.',
'No.',
'That knowledge has already been imparted to you.',
'Like others before you, you blindly follow a path to your own destruction.',
'You seek meaning, shelter in knowledge. You will not find it.',
'First you must find that which you need.',
'Events now spiral quickly towards the inevitable center, so you must act with haste.',
'You will rely on your skill as a mage. Not on your belongings, not on your scrolls and potions.',
'You shall find this: Knowledge will corrupt. It will destroy.',
  
]
// set event listeners 
iSeekTheEye.addEventListener('click', () => {
  copyQuestion();
  toggleVisibility();
  showRandomAnswer();
});

function copyQuestion() {
  const question = sillyQuestions.value;
  questionDisplay.textContent = question;
}

function toggleVisibility() {
  questionSection.classList.add('hidden');
  answerSection.classList.remove('hidden');
}

function showRandomAnswer() {
  const randomAnswer = getRandomItem(answers);
  epicQuotes.textContent = randomAnswer;
}

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
