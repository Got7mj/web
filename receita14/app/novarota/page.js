import MariaPrea from "./componentes/MariaPrea";

export default function NovaRotaHome() {
  return (
    <div>
      <h1>Nova Rota, Nova Página</h1>

      {/* Usando o componente com diferentes parâmetros */}
      <MariaPrea mensagem="Morreu Maria Preá 😢" cor="red" />
      <MariaPrea mensagem="Mas ela reviveu em React! ⚛️" cor="green" />
      <MariaPrea mensagem="E virou componente reutilizável! 💪" cor="blue" />

      <p>Visite as subpáginas:</p>
      <ul>
        <li><a href="/novarota/subpagina">Subpágina 1</a></li>
        <li><a href="/novarota/subpagina2">Subpágina 2</a></li>
      </ul>
    </div>
  );
}
