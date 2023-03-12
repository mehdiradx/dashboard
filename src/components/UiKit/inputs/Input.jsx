import React, { useState } from 'react';
import { Form, Input as AntInput } from 'antd';
import { Controller } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';

function Input({
  type = 'text',
  control,
  name,
  placeholder,
  error,
  Icon,
  containerClassName = '',
  errorClassName = '',
  label,
  changeHandler = () => {},
  disabled = false,
  required = false,
}) {
  const [isFocused, setFocus] = useState(false);

  return (
    <Form.Item
      label={label}
      className={error ? errorClassName : containerClassName}
      required={required}
    >
      <Controller
        render={({ field }) => {
          const { onChange } = field;

          switch (type) {
            // Handle types such as Inputs, Checkbox, Dropdown, datePicker, ...
            default:
              return (
                <AntInput
                  onFocus={() => setFocus(true)}
                  onBlurCapture={() => setFocus(false)}
                  type={type}
                  prefix={!!Icon && !isFocused ? <Icon /> : <span />}
                  placeholder={placeholder}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...field}
                  onChange={e => {
                    if (changeHandler) {
                      changeHandler();
                    }
                    onChange(e);
                  }}
                  disabled={disabled}
                />
              );
          }
        }}
        name={name}
        control={control}
      />
      {error && <FormErrorMessage message={error.toString()} />}
    </Form.Item>
  );
}

export default Input;
