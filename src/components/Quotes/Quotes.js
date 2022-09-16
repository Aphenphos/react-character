import React from 'react';
import './Quotes.css';

export default function Quotes({ quotes }) {

  return (
    <div className="quote-container">
      <ul>
        {quotes.map((quote, index) => (
          <li key={quote + index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}