import express from "express"
import cors from "cors"

const app = express()
const port = 3000;

app.use(cors());
app.use(express.json());

const quotes = [
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I should have been more kind.",
    author: "Clive James",
  },
];

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length );
  return quotes[index]
};

app.get("/", (req, res) => {
  res.send("Quote API is running. Try GET /quote");
});

app.get("/quote", (req, res) =>{
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.json(quote)
})

app.post("/quote", (req, res) => {
  const body = req.body;

  if(!body || typeof body !== "object" || !body.quote || !body.author ){
    res.status(400).json({ error: "Expected body to be a JSON object containing keys quote and author."});
    return;
  }
  quotes.push({quote:body.quote, author: body.author})
  res.json({status: "ok"})
})

app.listen(port, () =>{
  console.log(`Quote server listening on port ${port}`)
})
