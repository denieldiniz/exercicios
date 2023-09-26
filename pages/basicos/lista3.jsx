function gerarLista(numeroDeItens) {
  const lista = []

  for (let i = 1; i <= numeroDeItens; i++) {
    i === numeroDeItens ? lista.push(<span>{i}</span>) : lista.push(<span>{i} | </span>)
  }

  return lista
}

export default function lista() {
  return (
    <>
      <div>{gerarLista(10)}</div>
      <div>{gerarLista(5)}</div>
    </>
  )
}
