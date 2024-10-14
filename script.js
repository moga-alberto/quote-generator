// Show new Quote
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = apiQuotes[0];
	
    quoteText.textContent = quote.quote;
    quoteAuthor.textContent = quote.author;
}

// Get Quotes from API

apiQuotes = undefined;

async function getQuotes() {
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
    try {
        const response = await fetch(apiUrl, {
			method: "GET",
			headers: {
			  Accept: "application/json",
			  'X-Api-Key': 'N3NLGoR19BY1cd4ISpHm2w==IX1e0lQ7DlebzSjw',
			//   Origin: 'http://localhost:5500'
			},
		});
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
        alert(error);
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