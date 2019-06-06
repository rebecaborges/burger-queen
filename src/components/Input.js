import React from 'react';

function Input(props) {
  return (
    <input onChange={props.onChange} value={props.value} placeholder={props.text} />
  );
}

export default Input;