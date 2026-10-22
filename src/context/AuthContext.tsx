import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type AuthContextValue = {
  signedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn: () => setSignedIn(true),
        signOut: () => setSignedIn(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return value;
}
