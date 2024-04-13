import {createContext, useEffect, useState} from "react"
import useFetch from "../hooks/useFetch.jsx"

export const TrilhasContext = createContext()

export const TrilhasContextProviders = ({children}) => {

    //llamada a funcion que usa hook
    //la colocamos aqui para que tengan accesso general las paginas
    const [listaTrilhas, loading] = useFetch("../listTrails.json");
    const [trilhas, setTrilhas] = useState([]);

    //es necesario para esperar que la funcion useFetch() cargue los datos en la varianble listaTrilhas
    useEffect( () =>{
        !loading && listaTrilhas !== null && (
            setTrilhas(listaTrilhas)
        )
    },[listaTrilhas])
    
    return(
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    )
}