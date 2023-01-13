import React from 'react';

import './App.css';
import { RouteSwitcher } from './RouteSwitcher';
import { AuthProvider } from './AuthProvider';

function App() {
  return <AuthProvider>
    <RouteSwitcher/>
  </AuthProvider>;
}

export default App;

