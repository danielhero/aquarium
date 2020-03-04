import { useQuotes } from "./QuoteDataProvider.js";
import quoteHTML from "./Quote.js";


const QuoteList = () => {
    const contentElement = document.querySelector(".quotesList")
    const quotes = useQuotes()

    for (const quoteString of quotes) {
        contentElement.innerHTML += quoteHTML(quoteString)
    }
}

export default QuoteList