import React from 'react';

function FormErrorMessage({ message }) {
  return (
    <div className="ant-form-item-explain ant-form-item-explain-error">
      <div role="alert">{message}</div>
    </div>
  );
}

export default FormErrorMessage;
