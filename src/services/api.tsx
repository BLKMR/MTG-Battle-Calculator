import { useState, useEffect } from "react";

interface CreatureList {
    name: string,
    power: number,
    toughness: number,
    id: number
}

const useFetch = (url: string) => {
    const [data, setData] = useState<CreatureList[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data for target resource');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
            console.log(err.message);
        });
    }, 1000);

    return() => abortCont.abort();

    }, [url]);

    return {data};
}

export default useFetch;