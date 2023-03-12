import React from 'react';
import { Form as AntForm } from 'antd';

function Form({ name, onFinish, noValidate, children }) {
  return (
    <AntForm name={name} onFinish={onFinish} noValidate={noValidate}>
      {children}
    </AntForm>
  );
}

export default Form;
