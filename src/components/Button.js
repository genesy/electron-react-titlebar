import React from 'react';
// import { type BrowserWindow } from 'electron';

// type Props = {
//   className?: string,
//   children?: React.Node,
//   onClick?: () => void
// };

const Button = (props: Props) => {
  return (
    <button {...props} className={`titlebar-button ${props.className}`}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  className: '',
  onClick: () => {}
};

export default Button;
