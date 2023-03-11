import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { AuthProvider } from '../../hooks/useAuth';

function AppLayout() {
  const outlet = useOutlet();
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Await resolve={userPromise} errorElement={<div>Error element</div>}>
        {user => <AuthProvider userData={user}>{outlet}</AuthProvider>}
      </Await>
    </Suspense>
  );
}

export default AppLayout;
