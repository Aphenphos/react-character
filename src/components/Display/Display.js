import React from 'react';
import './Display.css';
export default function Display({ head, body, legs }) {

  return (
    <div id="body-container">
      <img className="head-image" src={`${process.env.PUBLIC_URL}/heads/head-${head}.jpg`}/>
      <img className="body-image" src={`${process.env.PUBLIC_URL}/bodys/body-${body}.jpg`}/>
      <img className="legs-image" src={`${process.env.PUBLIC_URL}/legs/legs-${legs}.jpg`}/>
    </div>
  );
}