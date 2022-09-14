import React from 'react';
import './Controls.css';

export default function Controls({ setHead, setBody, setPants }) {

  return (
    <div className="controls">
      <div id="head-control">
        <select name="head">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div id="body-control">
        <select name="body">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div id="legs-control">
        <select name="legs">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}