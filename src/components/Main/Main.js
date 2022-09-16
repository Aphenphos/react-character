import React, { useState } from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Quotes from '../Quotes/Quotes';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState(1);
  const [body, setBody] = useState(1);
  const [legs, setLegs] = useState(1);
  const [hCount, setH] = useState(0);
  const [bCount, setB] = useState(0);
  const [lCount, setL] = useState(0);
  const [quotes, setQuotes] = useState([]);

  return (
    <main>
      <Controls 
        hCount={hCount}
        bCount={bCount}
        lCount={lCount}
        setH={setH}
        setHead={setHead}
        setB={setB}
        setBody={setBody}
        setL={setL}
        setLegs={setLegs}
        setQuotes={setQuotes}
      />
      <Display
        hcount = {hCount} head={head} 
        bcount = {bCount} body={body} 
        lcount = {lCount} legs={legs}
      />
      <Quotes 
        quotes={quotes}
      />
    </main>
  );
}