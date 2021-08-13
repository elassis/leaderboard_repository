export default function renderLayout() {
  const title = `<div class="nav"><h1>Leaderboard</h1></div>
  <div class="row">
    <div class="col-1">
      <div class="c1-r1">
        <h3 class="title-recent">Recent Scores</h3>
        <button id="refresh-scores"><i class="fas fa-sync"></i></button>
      </div>
      <div class="c1-r2">
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>              
        </table>
      </div>
    </div>
    <div class="col-2">
      <div class="c2-r1">
        <h3 id="title-form">Add your score</h3>
      </div>
      <div>
        <form>
          <input type="text" id="user" placeholder="Your name">
          <input type="number" id="score" placeholder="Your score">
          <input type="submit" id="save-scores">
        </form>
        <div><p class="show" id="mssg"></p>
      </div>
    </div>
  </div>`;
  document.body.innerHTML = title;
}