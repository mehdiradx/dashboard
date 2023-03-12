import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from 'components/login/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Alert, Title } from 'components/UiKit';
import { status } from 'model';
import { selectLoginError, selectLoginStatus } from 'store/login';

function LoginPage() {
  const { login } = useAuth();
  const loginDataStatus = useSelector(selectLoginStatus);
  const error = useSelector(selectLoginError);

  const onSubmitLogin = async data => {
    login(data);
    // username: 'kminchelle',
    // password: '0lelplR',
  };

  return (
    <>
      {error && <Alert className="mb-6" message={error} type="error" showIcon closable />}
      <Title level={4} className="mv-6 mv-xs-3 text-xs-center" message="Log in" />
      <LoginForm onSubmit={onSubmitLogin} isSubmitting={loginDataStatus === status.PENDING} />
    </>
  );
}

export default LoginPage;
