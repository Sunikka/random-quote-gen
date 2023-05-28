function Text(){
    // Generate random quote
    const quotes = [
        "Don't dog the boys",
        "Your mom live in my toilet",
        "Oooohhh, Porpol",
        "Oispa vittu viinaa"
    ];
    let quoteIndex = Math.floor(Math.random() * (quotes.length));
    
    const quote = quotes[quoteIndex];
    return (
        <div id="text">
            <h1>"{ quote }"</h1>
        </div>
    )
}

export default Text;