import React from 'react';
import { Button as AntButton } from 'antd';

function Button({ htmlType, type, className, loading, text }) {
  return (
    <AntButton htmlType={htmlType} type={type} className={className} loading={loading}>
      {text}
    </AntButton>
  );
}

export default Button;
