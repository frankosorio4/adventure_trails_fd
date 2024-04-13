import { useEffect,useState } from "react";

function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //useEffect ayuda a esperar que la funcion fetch CARGUE pues ella tarda
    // para que cuando la pagina cargue no se quiebre
    useEffect( () => {
        fetch(url)
        .then((res) => res.json())
        .then((res) =>{
            setData(res)
        })
        .catch(error => {
            window.alert("Request error");
            console.error(error);
        }
        )
        .finally( () => setLoading(false))
    },[url]);

    return( [data, loading] );

}

export default useFetch;

//otra manera
// useEffect(() => {
//     if (!!apiTrilhas) {
//       setTrilhas(apiTrilhas.trilhas);
//     }
//   }, [apiTrilhas]);