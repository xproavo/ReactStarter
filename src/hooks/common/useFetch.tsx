import { useCallback, useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T = unknown>(url : string | null, option : RequestInit, dependencies: any[] = []) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    const fetchData = useCallback(
        async () => {
            if(!url) return;

            setState({ data: null, loading: true, error: null });
            try {
                const res = await fetch(url, option);
                if(!res.ok) throw new Error(`Fetch error "${res.status}"`);

                const json = (await res.json()) as T;
                setState({
                    data : json,
                    loading : true,
                    error : null
                })
                
            } catch (error : any) {
                setState({
                    data : null,
                    loading : false,
                    error : error.message ?? "Erreur inconnue"
                })
            }
        }, [url, JSON.stringify(option)]
    )

    useEffect(() => {
        fetchData();
    }, [state, ...dependencies])

    return {...state, refetch : fetch}
}