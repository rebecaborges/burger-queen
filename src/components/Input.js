import React from 'react';
import '../style/Input.css';

function Input(props) {
  return (
    <input className="style-input" onChange={props.onChange} value={props.value} placeholder={props.text} />
  );
}

export default Input;