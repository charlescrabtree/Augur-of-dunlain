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
  'yes, definitely',
  'etc',
  'etc etc',
  'no, foolish mage. turn back',
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
