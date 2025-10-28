import MariaPrea from "../componentes/MariaPrea";

export default function SubPagina() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Subpágina de NovaRota</h2>

      {/* Reutilizando o mesmo componente */}
      <MariaPrea mensagem="Agora estamos na subpágina!" cor="purple" />

      <a href="/novarota" style={{ color: "blue" }}>
        Voltar para a página principal
      </a>
    </div>
  );
}
