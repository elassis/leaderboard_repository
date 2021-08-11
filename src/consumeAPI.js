const getScoresFromApi = () => {
  const resp = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XR8Xsx8fKmg97cQOTiMP/scores')
    .then((response) => response.json())
    .then((json) => json);
  return resp;
};
const setScoresInApi = (user, score) => {
  const resp = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XR8Xsx8fKmg97cQOTiMP/scores', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);

  return resp;
};

const asyncGetScores = async () => {
  // get the table in the document to place the elements
  const table = document.querySelectorAll('table');
  table[0].innerHTML = '';
  // call the function to get the scores of the leaderBoard API
  const response = await getScoresFromApi();
  const arr = Array.from(response.result);
  arr.forEach((item, i) => {
    const value = (i % 2 === 0) ? 'even' : 'odd';
    const elem = `<tr id="${value}">
                    <td>${item.user}</td>
                    <td>${item.score}</td>
                  </tr>`;
    table[0].innerHTML += elem;
  });
};

const hideMssg = () => {
  const placeHolder = document.querySelector('#mssg');
  placeHolder.classList.add('show');
};
const asyncSetScores = async (user, score) => {
  const placeHolder = document.querySelector('#mssg');
  const response = await setScoresInApi(user, score);
  placeHolder.classList.remove('show');
  placeHolder.innerHTML = response.result;
  setTimeout(hideMssg, 3000);
};
export { asyncGetScores, asyncSetScores };