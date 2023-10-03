import listaProdutos from "../../data/listaProdutos"
import lista from "../../data/listaProdutos"

export default function repeticao2() {
  function renderizarLinhas() {
    console.log(listaProdutos)

    return <tr>temp</tr>
    // return listaProdutos.map((produto) => {
    //   return (
    //     <tr key={produto.id}>
    //       <td>{produto.id}</td>
    //       <td>{produto.nome}</td>
    //       <td>{produto.preco}</td>
    //     </tr>
    //   )
    // })
  }

  return (
    <div>
      <table>
        <thead>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  )
}
