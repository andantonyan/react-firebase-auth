import React from 'react';
import './App.css';
import { useAuth } from './useAuth';
import Login from './Login';
import Dashboard from './Dashboard';
import { AuthContext } from './AuthContext';

function App() {
  const {user, token, tokenData} = useAuth();
  const value = {user, token, tokenData, initialized: user !== null};

  return <AuthContext.Provider value={value}>
    <>
      <h1>App</h1>
      {user?.isAnonymous ? <Login/> : <Dashboard/>}
    </>
  </AuthContext.Provider>;
}

export default App;

