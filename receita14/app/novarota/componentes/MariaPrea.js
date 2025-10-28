export default function MariaPrea({ mensagem, cor = "black" }) {
  return (
    <h2 style={{ color: cor }}>
      {mensagem}
    </h2>
  );
}
