import React from 'react';
import { Alert as AntAlert } from 'antd';

function Alert({ className, message, type, showIcon, closable }) {
  return (
    <AntAlert
      className={className}
      message={message}
      type={type}
      showIcon={showIcon}
      closable={closable}
    />
  );
}

export default Alert;
