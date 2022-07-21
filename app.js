// import functions and grab DOM elements
const questionSection = document.getElementById('question-section');
const sillyQuestions = document.getElementById('silly-questions');
const iSeekTheEye = document.getElementById('I-Seek-the-Eye-of-Magnus');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const inGame = document.getElementById('in-game');
const epicQuotes = document.getElementById('epic-quotes');


// let state
const answers = [
  
]
// set event listeners 
askButton.addEventListener('click', () => {
  copyQuestion();
  toggleVisibility();
  applyAnimations();
  showRandomAnswer();
});

function copyQuestion () {
  const question = askedQuestion.value;
  questionDisplay.textContent = question;
}

function toggleVisibility() {
  question.Section.classList.add('hidden');
  answerSection.classList.remove('hidden');
}

function showRandomAnswer() {
  const randomAnswer = getRandomItem(answers);
  answerDisplay.textContent = randomAnswer;
}

function getRandomItem(array) {
  const randomInex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
