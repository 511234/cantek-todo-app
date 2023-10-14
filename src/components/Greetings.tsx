import utc from "dayjs/plugin/utc";
import {useEffect, useState} from "react";
import * as dayjs from "dayjs";

dayjs.extend(utc)

export const Greetings = () => {
    const [greeting, setGreeting] = useState('');

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
        <h1 style={{letterSpacing: '0.3rem'}}>{greeting}</h1>
    );
}