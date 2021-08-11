export default function renderLayout() {
  const title = `<h1>Leaderboard</h1>
  <div class="row">
    <div class="col-1">
      <div class="c1-r1">
        <h3>Recent Scores</h3>
        <button id="refresh-scores">Refresh</button>
      </div>
      <div class="c1-r2">
        <table>
          
        </table>
      </div>
    </div>
    <div class="col-2">
      <div class="c2-r1">
        <h3>Add your score</h3>
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