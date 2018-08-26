import React from 'react';
import { remote } from 'electron';
import Button from './Button';

const CloseButton = (props: Props) => {
  const closeWindow = () => {
    remote.getCurrentWindow().close();
  };
  return (
    <Button onClick={closeWindow} {...props}>
      <i className="fa fa-close" />
    </Button>
  );
};

export default CloseButton;
