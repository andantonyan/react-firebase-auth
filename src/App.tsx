import React from 'react';
import './App.css';
import { useAuth } from './useAuth';
import Login from './Login';
import Dashboard from './Dashboard';
import { AuthProviderContext } from './AuthProviderContext';

function App() {
  const {user, token, tokenData} = useAuth();
  const value = {user, token, tokenData, initialized: user !== null};

  return <AuthProviderContext.Provider value={value}>
    <>
      <h1>App</h1>
      {user?.isAnonymous ? <Login/> : <Dashboard/>}
    </>
  </AuthProviderContext.Provider>;
}

export default App;

