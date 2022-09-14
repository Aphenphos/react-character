import React, { useState } from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState(1);
  const [body, setBody] = useState(1);
  const [legs, setLegs] = useState(1);

  return (
    <main>
      <Controls 
        setHead={setHead}
        setBody={setBody}
        setLegs={setLegs}
      />
      <Display head={head} body={body} legs={legs}/>
    </main>
  );
}