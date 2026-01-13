const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")

const QUOTE_API_URL = "http://127.0.0.1:3000";

async function displayRandomQuote(){
  try {
    const res = await fetch(`${QUOTE_API_URL}/quote`);
    const data = await res.json()

    quoteElement.textContent = `"${data.quote}"`;
    authorElement.textContent = `-${data.author}`;
  } catch (err) {
    quoteElement.textContent = "Could not load quote at the moment";
    authorElement.textContent = "";
    console.error(err);
  }
}

displayRandomQuote();

// Load a new quote when button is clicked
newQuoteBtn.addEventListener("click", displayRandomQuote);
