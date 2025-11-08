import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key : string, initialValue : T){
    const [storedValue, setStoredValue] = useState<T>(
        () => {
            try {
                const item = localStorage.getItem(key);
                return item ? (JSON.parse(item) as T): initialValue;
            } catch (error) {
                console.warn(`"${key}" not exist`, error);
                return initialValue;
            }
        }
    );

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch(error) {
            console.warn(`Error to register "${key}" value`);
        }
    }, [storedValue]);

    return [storedValue, setStoredValue] as const; 
}