import CardTrilha from "../components/CardTrilha"
import styles from "./ListaTrilhas.module.css"
import {useContext} from "react"
import {TrilhasContext} from "../context/TrilhasContext"

function ListaTrilhas() {

  //const url = "../listTrails.json";
  ////llamada a funcion que usa hook
  //const [listaTrilhas, loading] = useFetch(url);
  //// console.log(list);

  const {trilhas} = useContext(TrilhasContext)
  
  return (
    <div className={styles.container}>

      <img src="../imagen-trilha-principal-1.jpg" className={styles.imagenPrincipal} alt="Imagen Principal" />

      <h1 className={styles.titulo}>Explore Trilhas Increiveis</h1>

      {
        trilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index}/>
          // <h2 key={index}>{element.nomeTrilha}</h2>
        ))
      }
    </div>
  )
}

export default ListaTrilhas;

    // {!loading && listaTrilhas !== null &&(
    //   trilhas.map((trilha, index) => (
    //     <CardTrilha dadosTrilha={trilha} key={index}/>
    //     // <h2 key={index}>{element.nomeTrilha}</h2>
    //   ))
    // )}
