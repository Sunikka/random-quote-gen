import QuoteBtn from "./QuoteBtn";
import Author from "./Author";
import Text from "./Text";

function QuoteCard() {
    return (
        <div className="quote-box" id="quote-box">
            <Text />
            <Author />
            <QuoteBtn />
        </div>
    )
}

export default QuoteCard;