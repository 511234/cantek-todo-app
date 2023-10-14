import axios from "axios";
import {IQuoteRes} from "../types";

export const fetchQuote = async () => {
    return await axios.get<IQuoteRes[]>('https://api.api-ninjas.com/v1/quotes?category=success', {headers: {'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY}})
}