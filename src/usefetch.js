import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData]=useState(null);
    const [ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const abortCont=new AbortController();
        fetch(url,{signal:abortCont.signal})
            .then(res =>{
                if(!res.ok){ //error coming back from server
                    throw Error('could not fetch data');
                }
                return res.json()
            })
            .then(data =>{
                setData(data);
                setIspending(false);
                setError(null);
            })
            .catch(err =>{  // auto catches network / connection error
                if(err.name==='AbortError')
                {
                    console.log('fetch aborted');
                }
                else{
                    setIspending(false);
                    setError(err.message);
                }
            })
            return () => abortCont.abort();
    },[url]);
    return ({data,ispending,error});
}
export default useFetch;