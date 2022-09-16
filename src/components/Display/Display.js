import React from 'react';
import './Display.css';
export default function Display({ head, body, legs, hcount, bcount, lcount }) {

  return (
    <div id="body-container">
      <h3> {hcount} </h3>
      <img className="head-image" src={`${process.env.PUBLIC_URL}/heads/head-${head}.jpg`}/>
      <h3> {bcount} </h3>
      <img className="body-image" src={`${process.env.PUBLIC_URL}/bodys/body-${body}.jpg`}/>
      <h3> {lcount} </h3>
      <img className="legs-image" src={`${process.env.PUBLIC_URL}/legs/legs-${legs}.jpg`}/>
    </div>
  );
}