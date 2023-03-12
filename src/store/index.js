import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login';
import usersReducer from './users';
import { loginApi } from './login/loginService';

const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([loginApi.middleware]),
});

export default store;
