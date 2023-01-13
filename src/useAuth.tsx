import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, ParsedToken, signInAnonymously, User } from 'firebase/auth';

export function useAuth() {
  const auth = getAuth();

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [tokenData, setTokenData] = useState<ParsedToken>({});

  useEffect(() => {
    return onAuthStateChanged(auth, async user => {
      user = user ?? (await signInAnonymously(auth)).user;
      const tokenResult = await user.getIdTokenResult();
      setUser(user);
      setToken(tokenResult.token);
      setTokenData(tokenResult.claims);
    });
  });

  return {user, token, tokenData};
}
