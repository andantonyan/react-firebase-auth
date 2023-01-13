import { createContext, useContext } from 'react';
import { ParsedToken, User } from 'firebase/auth';

export interface AuthContextData {
  user: User | null;
  token: string | null;
  tokenData: ParsedToken;
  initialized: boolean;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  token: null,
  tokenData: {},
  initialized: false,
});

export const useAuthContext = () => useContext(AuthContext);
