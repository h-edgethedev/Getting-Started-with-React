import useSwr from "swr"

const fetcher = (url) => fetch(url).then((res)=> res.json())

const useFetch = (url) =>{
    const {data, error} = useSwr(url, fetcher)

    return{
        data, 
        loading: !data && !error,
        error
    }
}

export default useFetch;