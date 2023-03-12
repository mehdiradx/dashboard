import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs, Button, Form } from 'components/UiKit';
import { loginSchema } from 'schemas';

function LoginForm({ onSubmit, isSubmitting = false }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <Form name="login" onFinish={handleSubmit(onSubmit)} noValidate>
      <Inputs
        errorClassName="ant-form-item-has-error mb-1"
        containerClassName="mb-3"
        control={control}
        name="username"
        placeholder="username"
        Icon={UserOutlined}
        type="input"
        error={errors.username?.message}
      />
      <Inputs
        errorClassName="ant-form-item-has-error mb-1"
        control={control}
        name="password"
        placeholder="Password"
        Icon={LockOutlined}
        type="password"
        error={errors.password?.message}
      />
      <Button htmlType="submit" className="w-100" loading={isSubmitting} text="Login" />
    </Form>
  );
}

export default LoginForm;
