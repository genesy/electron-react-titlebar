import React from 'react';
import { remote } from 'electron';
import Button from './Button';

const MinimizeButton = (props) => {
  const win = remote.getCurrentWindow();
  return (
    <Button onClick={() => win.minimize()} {...props}>
      <i className="fa fa-window-minimize" />
    </Button>
  );
};

export default MinimizeButton;
