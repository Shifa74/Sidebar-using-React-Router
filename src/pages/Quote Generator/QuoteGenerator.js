import { useEffect, useState } from 'react';
import classes from './style.module.css';

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
   const fetchQuote = async () => {
     const response = await fetch('https://type.fit/api/quotes');
     if(!response.ok) {
      throw new Error ('Something went wrong!');
    }
    const data = await response.json();
    setQuotes(data);
    setQuote(data[0]);
   }
   fetchQuote();
  }, []);

 const quoteChangeHandler = () => {
  setQuote(getRandomQuote(quotes));
 }

  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <h1>Project 3: Quote Generator</h1>
        <section className={classes.section}>
          <button className={classes.button} onClick={quoteChangeHandler}>New Quote</button>
          <h3 className={classes.heading}>
            <span>"</span>
            {quote?.text}
            <span>"</span>
          </h3>
          <i>- {quote?.author}</i>
        </section>
      </main>
    </div>
    )

};

export default App;
