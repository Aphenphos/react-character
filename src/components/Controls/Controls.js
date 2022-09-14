import React, { useState } from 'react';
import './Controls.css';

export default function Controls({ setHead, setBody, setLegs, setH, setQuotes, setB, setL }) {
  const [curQuote, setCurQuote] = useState('');
  const saveQuote = () => {
    setQuotes((prevQuotes) => [curQuote, ...prevQuotes]);
    setCurQuote('');
  };
  return (
    <div className="controls">
      <div id="head-control">
        <label> Head
          <select name="head" onChange={e => { setHead(e.target.value); setH(); }}>
            <option value="1" default>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <div id="body-control" onChange={(e) => setBody(e.target.value)}>
        <label> Body
          <select name="body">
            <option value="1" default>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <div id="legs-control" onChange={(e) => setLegs(e.target.value)}>
        <label>Legs
          <select name="legs">
            <option value="1" default>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <input type="text" value={curQuote} onChange={(e) => setCurQuote(e.target.value)}/>
      <button onClick={saveQuote}>Save Quote</button>
    </div>
  );
}