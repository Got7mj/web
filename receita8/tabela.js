export function gerarTabela(arr, targetId) {
  const container = document.getElementById(targetId);

  if (!arr || arr.length === 0) {
    container.innerHTML = "<p>Nenhum dado encontrado.</p>";
    return;
  }

  // cabeçalhos = chaves do objeto
  const headers = Object.keys(arr[0]);
  const thead = headers.map(h => `<th>${h}</th>`).join("");
  const rows = arr.map(obj => {
    const tds = headers.map(h => `<td>${obj[h]}</td>`).join("");
    return `<tr>${tds}</tr>`;
  }).join("");

  container.innerHTML = `
    <table>
      <thead><tr>${thead}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}
