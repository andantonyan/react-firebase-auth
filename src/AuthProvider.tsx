import React from 'react';

import { useAuth } from './useAuth';
import { AuthContext } from './AuthContext';

export function AuthProvider(props: React.PropsWithChildren) {
  const {user, token, tokenData} = useAuth();
  const value = {user, token, tokenData, initialized: user !== null};

  return <AuthContext.Provider value={value}>
    {props.children}
  </AuthContext.Provider>;
}
