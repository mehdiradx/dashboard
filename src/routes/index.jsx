import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from '../pages';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<span>Handled error in main route.</span>}>
      <Route path="/home" element={<HomePage />} errorElement={<span>Handled error in home page.</span>} />
    </Route>
  )
);
