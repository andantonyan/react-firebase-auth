import React from 'react';

import { useAuthContext } from './AuthContext';
import Login from './Login';
import Dashboard from './Dashboard';

export function RouteSwitcher() {
  const context = useAuthContext();

  return <>
    <h1>App</h1>
    {context.user?.isAnonymous ? <Login/> : <Dashboard/>}
  </>;
}
