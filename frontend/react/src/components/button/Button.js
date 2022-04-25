import React from 'react';

import buttonStyles from './Button.module.scss'

const Button = ({text= 'Sign In', type="button"}) => {
  return (
    <div className={buttonStyles.button_block}>
      <button className={buttonStyles.button} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
