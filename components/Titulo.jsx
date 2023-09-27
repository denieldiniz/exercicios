export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <br />
      <p>{props.principal}</p>
      <p>{props.secundario}</p>
    </>
  ) : (
    <>
      <br />
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
    </>
  )
}

//   if (props.pequeno === true) {
//     return (
//       <>
//         <br />
//         <p>{props.principal}</p>
//         <p>{props.secundario}</p>
//       </>
//     )
//   } else {
//     return (
//       <>
//         <br />
//         <h1>{props.principal}</h1>
//         <h2>{props.secundario}</h2>
//       </>
//     )
//   }
