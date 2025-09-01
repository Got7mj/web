export function gerarTabela(arr, targetId="saida") {
  const container = document.getElementById(targetId);

  if (!arr || arr.length === 0) {
    container.innerHTML = "<p>Nenhum dado encontrado.</p>";
    return;
  }

  // Pega dinamicamente as chaves do primeiro objeto
  const headers = Object.keys(arr[0]);

  // Cabeçalhos
  const ths = headers.map(h => `<th>${h}</th>`).join("");

  // Linhas
  const linhas = arr.map(obj => {
    const tds = headers.map(h => `<td>${obj[h]}</td>`).join("");
    return `<tr>${tds}</tr>`;
  }).join("\n");

  container.innerHTML = `
    <table class="tabela">
      <thead><tr>${ths}</tr></thead>
      <tbody>${linhas}</tbody>
    </table>
  `;
}
