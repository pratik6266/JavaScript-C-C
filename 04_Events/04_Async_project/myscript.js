const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div id="insert">
    <table>
      <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `
})