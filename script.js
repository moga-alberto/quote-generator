// Show new Quote
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = apiQuotes;
    console.log(quote);
    quoteText.textContent = quote.quotes[0].text;
    quoteAuthor.textContent = quote.quotes[0].author;
}

// Get Quotes from API

apiQuotes = undefined;

async function getQuotes() {
    const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
        // alert(error);
    }
}

// Tweet Quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank');
}


//On Load
newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);
getQuotes();