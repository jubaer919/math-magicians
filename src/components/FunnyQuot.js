import React, { useState, useEffect } from 'react';
import './calculator.css';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'o/+TcyPrEUuJuXWcblwB/w==XUMaVQ2GEq6fcrHt', // Replace with your actual API key
            },
          },
        );

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const randomQuote = data[0]?.quote || 'No quote available';

        setQuote(randomQuote);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return <div className="quot-container">{quote}</div>;
};

export default QuoteDisplay;
