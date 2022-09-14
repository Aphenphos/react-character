import React, { useState } from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState();
  const [body, setBody] = useState();
  const [legs, setLegs] = useState();

  return (
    <main>
      <Display head={head} body={body} legs={legs}/>
      <Controls 
        setHead={setHead}
        setBody={setBody}
        setLegs={setLegs}
      />
    </main>
  );
}