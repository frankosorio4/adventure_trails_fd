import { useEffect,useState } from "react";

function useFetch(url){

    const [data, setData] =useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        fetch(url)
        .then((res) => res.json())
        .then((res) =>{
            setData(res)
        })
        .catch(err => {
            window.alert("Request error");
            console.error(err);
        }
        )
        .finally( () => setLoading(false))
    },[url]);

    return( [data, loading]
    );

}

export default useFetch;