import React, { memo } from 'react';
import './button.css';

function Button({type='button', children, className, handleClick}) {
  return (
    <button 
      type={type} 
      className={`default-btn ${className}`}
       onClick={handleClick}>
        {children}
    </button>
  );  
}

export const MemoizedBtn = memo(Button);