import { createContext } from 'react';
import { ParsedToken, User } from 'firebase/auth';

export interface AuthProviderData {
  user: User | null;
  token: string | null;
  tokenData: ParsedToken;
  initialized: boolean;
}

export const AuthProviderContext = createContext<AuthProviderData>({
  user: null,
  token: null,
  tokenData: {},
  initialized: false,
});
