export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"

  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#44c" : "#c44",
          color: props.color,
          textAlign: props.direita ? "right" : "center",
        }}>
        {classeAplicada}
      </h1>
    </div>
  )
}
