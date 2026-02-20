// Fetch quotes dynamically
let quotes = [];
let index = 0;

async function loadQuotes(){
  try {
    const res = await fetch('/quotes');
    quotes = await res.json();
    if(quotes.length > 0) updateQuote();
  } catch(e){
    console.error('Failed to load quotes', e);
  }
}

function updateQuote(){
  if(quotes.length > 0){
    document.getElementById('quoteText').innerText = quotes[index];
  }
}

function nextQuote(){
  if(quotes.length > 0){
    index = (index + 1) % quotes.length;
    updateQuote();
  }
}

function prevQuote(){
  if(quotes.length > 0){
    index = (index - 1 + quotes.length) % quotes.length;
    updateQuote();
  }
}

function randomQuote(){
  if(quotes.length > 0){
    index = Math.floor(Math.random() * quotes.length);
    updateQuote();
  }
}

function setTheme(theme){
  if(theme==='day'){
    document.body.style.background='linear-gradient(to bottom, #87ceeb 0%, #ffb347 100%)';
  } else if(theme==='sunset'){
    document.body.style.background='linear-gradient(to bottom, #ffb347 0%, #1e3c72 100%)';
  } else if(theme==='night'){
    document.body.style.background='linear-gradient(to bottom, #1e3c72 0%, #0d1b2a 100%)';
  }
}

loadQuotes();