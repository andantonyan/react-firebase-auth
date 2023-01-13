import React, { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';

function RenderAuthData() {
  const context = useContext(AuthContext);

  return <>
    <br/>
    <br/>
    <code>{context.token}</code>
    <br/>
    <br/>
    <code>{JSON.stringify(context.tokenData)}</code>
    <br/>
    <br/>
  </>;
}

function Dashboard() {
  const handleLogout = () => signOut(getAuth());

  return (
    <>
      <h1>Dashboard page</h1>
      <RenderAuthData/>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
