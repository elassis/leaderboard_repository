import { asyncGetScores, asyncSetScores } from './consumeAPI.js';

function getScores() {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'refresh-scores') {
      asyncGetScores();
    }
  });
}

function setScores() {
  const user = document.querySelector('#user');
  const score = document.querySelector('#score');
  document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id === 'save-scores') {
      asyncSetScores(user.value, score.value);
    }
  });
}

export { getScores, setScores };