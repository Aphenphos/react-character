import React, { useState } from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState(1);
  const [body, setBody] = useState(1);
  const [legs, setLegs] = useState(1);
  const [hCount, setH] = useState(0);
  const [bCount, setB] = useState(0);
  const [lCount, setL] = useState(0);

  return (
    <main>
      <Controls 
        setH={setH}
        setHead={setHead}
        setB={setB}
        setBody={setBody}
        setL={setL}
        setLegs={setLegs}
        
      />
      <Display
        hcount = {hCount} head={head} 
        bcount = {bCount} body={body} 
        lcount = {lCount} legs={legs}
      />
    </main>
  );
}