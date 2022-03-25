import React, {memo} from 'react';
import './style.css';

function FooterLink({children}) {
  return (
    <div className='footer'>
      {children}
    </div>
  );
}

export const MemoizedFooterLink = memo(FooterLink);