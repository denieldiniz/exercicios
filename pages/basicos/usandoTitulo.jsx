import Titulo from "@/components/Titulo"

export default function usandoTitulo() {
  return (
    <>
      <Titulo
        principal="Testando com pequeno"
        secundario="Usei a propriedade 'pequeno'"
        pequeno
      />
      <Titulo
        principal="Testando sem pequeno"
        secundario="Não usei a propriedade 'pequeno'"
      />

      {/* <Titulo
        principal="Págida de cadastro"
        secundario="Incluir, alterar e excluir coisas!"
        pequeno={false}
      />
      <Titulo
        principal="Págida de login"
        secundario="Informe seu e-maile senha"
        pequeno={true}
      /> */}
    </>
  )
}
