export default function renderLayout() {
  const title = `<h1>Leaderboard</h1>
  <div class="row">
    <div class="col-1">
      <div class="c1-r1">
        <h3>Recent Scores</h3>
        <button>Refresh</button>
      </div>
      <div class="c1-r2">
        <table>
          <tr>
            <td>Name:</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>100</td>
          </tr>
          <tr>
           <td>Name:</td>
           <td>100</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-2">
      <div class="c2-r1">
        <h3>Add your score</h3>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Your name">
          <input type="text" placeholder="Your score">
          <input type="submit">
        </form>
      </div>
    </div>
  </div>`;
  document.body.innerHTML = title;
}