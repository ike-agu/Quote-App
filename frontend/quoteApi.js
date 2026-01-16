const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const addQuoteBtn = document.getElementById("submit-btn");
const messageElement = document.getElementById("message");

const form = document.getElementById("add-quote-form");

const QUOTE_API_URL = "http://127.0.0.1:3000";

async function displayRandomQuote() {
  try {
    const res = await fetch(`${QUOTE_API_URL}/quote`);
    const data = await res.json();

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

//===Add quote=========
async function addQuote(event) {
  // if (event) event.preventDefault();
  const quote = quoteInput.value.trim();
  const author = authorInput.value.trim();

  if (!quote || !author) {
    messageElement.textContent = "Please enter both quote and an author";
    return;
  }

  try {
    const res = await fetch(`${QUOTE_API_URL}/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote, author }),
    });

    const data = await res.json();
    if (!res.ok) {
      messageElement.textContent = data.error || "Failed to add quote";
      return;
    }
    messageElement.textContent = "Quote added successfully!";
    //clear inputs
    quoteInput.value = "";
    authorInput.value = "";

    displayRandomQuote();
  } catch (error) {
    messageElement.textContent = "Error adding quote";
    console.error(error);
  }
}
//add new quote when button is clicked
addQuoteBtn.addEventListener("click", addQuote);

form.addEventListener("submit", addQuote);
