import axios, {AxiosResponse} from "axios";
import {IQuoteRes} from "../types";

export const fetchQuote = async () => {

    let shouldFetch = true
    let res: AxiosResponse<IQuoteRes[]>

    while (shouldFetch) {
        res = await axios.get<IQuoteRes[]>('https://api.api-ninjas.com/v1/quotes?category=success', {headers: {'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY}})
        if (res.data[0].quote.length <= 45) {
            shouldFetch = false
        }
    }
    return res
}