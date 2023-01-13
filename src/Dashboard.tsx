import React, { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { AuthProviderContext } from './AuthProviderContext';

function Dashboard() {
  const handleLogout = () => signOut(getAuth());
  const context = useContext(AuthProviderContext);

  return (
    <>
      <h1>Dashboard page</h1>

      <br/>
      <br/>
      <code>{context.token}</code>
      <br/>
      <br/>
      <code>{JSON.stringify(context.tokenData)}</code>
      <br/>
      <br/>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
