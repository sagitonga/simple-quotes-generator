const quotes = [
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    name: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
  },
  {
    name: "Frank Zapa",
    quote: "So many books, so little time.",
  },
  {
    name: "Dr Seuss",
    quote:
      "You know you are in love when you cannot fall asleep because reality is finally better than your dreams.",
  },
  {
    name: "Robert Frost",
    quote:
      "In three words I can sum up everything I have learned about life: it goes on.",
  },
  {
    name: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent.",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(params) {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
