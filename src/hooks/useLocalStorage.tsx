import {useEffect, useState} from "react";

export const useLocalStorage = (keys: string[]) => {

    const getLs = () => {
        return keys.reduce((acc, curr) => {
            acc = {...acc, [curr]: localStorage.getItem(curr) ? JSON.parse(localStorage.getItem(curr)) : null}
            return acc
        }, {})
    }

    const [localS, setLocalS] = useState<Record<string, string>>(() => getLs())

    const setLs = (obj: Record<string, unknown>) => {
        for (const [key, value] of Object.entries(obj)) {
            localStorage.setItem(key, JSON.stringify(value))
        }
        window.dispatchEvent(new Event('storage'))
    }

    useEffect(() => {
        const handleLs = () => {
            setLocalS(getLs())
        }

        window.addEventListener('storage', handleLs)
        return () => window.removeEventListener('storage', handleLs)
    }, [])


    return [localS, setLs] as const
}