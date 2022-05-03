import React from "react";

import inputStyles from './Input.module.scss'

const InputComponent = ({onChange, value, size, type = 'text', placeholder, label, error}) => {
  return (
    <div className={inputStyles.input_block}>
      <div className={inputStyles.label}>{label}</div>
      <input type={type} value={value} placeholder={placeholder} className={inputStyles.big_input} onChange={onChange}/>
      {error ? <div className={inputStyles.error_text}>{error}</div> : null}
    </div>
  );
}

export default InputComponent;
