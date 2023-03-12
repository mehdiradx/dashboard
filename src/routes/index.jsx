/* eslint-disable no-promise-executor-return */
/* eslint-disable no-new */
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';
import { HomePage, LoginPage, UsersPage } from '../pages';
import { AppLayout, HomeLayout, ProtectedLayout } from './layouts';

// ideally this would be an API call to server to get logged in user data
const getUserData = () =>
  new Promise(resolve =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      resolve(user);
    }, 2000)
  );

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // eslint-disable-next-line prefer-promise-reject-errors
//       reject('Error');
//     }, 3000)
//   );

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} loader={() => defer({ userPromise: getUserData() })}>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Route>
  )
);
