import { useState, useEffect, useRef } from 'react'; 
const useDebouncedSearch = <T>(query: string, searchFn: (query:string,signal: AbortSignal) => Promise<T>, delayMs: number = 300) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const searchFnRef = useRef(searchFn);

    if (searchFnRef.current !== searchFn) {
        searchFnRef.current = searchFn;
    }
    
    useEffect(() => {
        if (query === '') {
            setData(null);
            setIsLoading(false);
            setError(null);
            return;
        }
        const controller = new AbortController();
        const debounceTimeout = setTimeout(()=>{
            setIsLoading(true);
            setError(null);
            searchFnRef.current(query, controller.signal)
                .then((res: T) => {
                    setData(res);
                    setIsLoading(false);
                })
                .catch((err: Error) => {
                    if (err.name !== 'AbortError') {
                        setError(err);
                        setIsLoading(false);
                    }
                });
        }, delayMs);
        return () => {
            clearTimeout(debounceTimeout);
            controller.abort();
        };
    }, [query, delayMs]);
    return { data, isLoading, error };
};