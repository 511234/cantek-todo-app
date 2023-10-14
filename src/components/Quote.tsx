import {useEffect} from "react";
import {fetchQuote} from "../axios";
import {useCookies} from "react-cookie";
import './quote.css'

export const Quote = () => {
    const [cookies, setCookie] = useCookies(['quote']);

    const handleSaveQuoteToCookie = async () => {
        if (!cookies.quote) {
            const newQuote = (await fetchQuote()).data?.[0]
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(today.getDate() + 1)
            setCookie("quote", newQuote, {expires: tomorrow})
        }
    }

    useEffect(() => {
        handleSaveQuoteToCookie()
    }, [])

    return (
        <div id="quote-wrapper">
            <div className="quote-bg position-relative">
                <span className="quote-text">{cookies?.quote?.quote}</span>
            </div>
        </div>
    )
}