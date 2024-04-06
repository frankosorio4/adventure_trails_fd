import CardTrilha from "./components/CardTrilha"
import "./App.css"
import useFetch from "./hooks/useFetch"

function App() {

  const url = "../listTrails.json";
  const [list, loading] = useFetch(url);
  // console.log(list);

    const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da lagoa",
      cidade: "Florianopolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "iniciante",
      tipo: "caminhada / trekking",
      nomeUsuario: "frank",
      urlImagen: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
  
  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas Increiveis</h1>

      {/* {
        listaTrilhas.map((trilha,index) => (
          <CardTrilha dadosTrilha={trilha} key={index}/>
        ))
      } */}

      {!loading && list !== null &&(
        list.map((elementArray, index) => (
          <CardTrilha dadosTrilha={elementArray} key={index}/>
          // <h2 key={index}>{element.nomeTrilha}</h2>
        ))
      )}
    </div>
  )
}

export default App

//urlImagen: "./assets/imagen-trilha-exemplo.jpg"
//imagen trilha principal
//https://images.pexels.com/photos/2132087/pexels-photo-2132087.jpeg
// imagen trilha card
//https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1


// function App() {

//   const listaTrilhas = [
//     {
//       nomeTrilha: "Trilha da Costa da lagoa",
//       cidade: "Florianopolis",
//       estado: "SC",
//       duracao: 120,
//       trajeto: 4,
//       dificuldade: "iniciante",
//       tipo: "caminhada / trekking",
//       nomeUsuario: "frank",
//       urlImagen: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       //urlImagen: "./assets/imagen-trilha-exemplo.jpg"
//     }
//   ]

//   return (
//     <div className="container">
//       <h1 className="titulo">Explore Trilhas Increiveis</h1>
//     {
//       listaTrilhas.map((trilha,index) => (
//         <CardTrilha dadosTrilha={trilha} key={index}/>
//       ))
//     }
//     </div>
//   )
// }