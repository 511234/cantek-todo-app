import utc from "dayjs/plugin/utc";
import {useEffect, useState} from "react";
import * as dayjs from "dayjs";
import {useLocalStorage} from "../hooks/useLocalStorage.tsx";

dayjs.extend(utc)

export const Greetings = () => {
    const [greeting, setGreeting] = useState('');
    const [ls] = useLocalStorage(['nickname'])

    useEffect(() => {
        const currentHour = dayjs.utc().local().hour()

        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);

    return (
        <h1 style={{letterSpacing: '0.3rem'}}>{greeting}{ls?.nickname ? `, ${ls.nickname}` : null}</h1>
    );
}