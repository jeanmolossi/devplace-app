import React, { createContext, useCallback, useContext, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  type: 'DEV' | 'EMPLOYMENT';
};

type AuthContextProps = {
  user: User;
  signIn(): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  const signIn = useCallback(() => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@email.com',
      type: 'DEV',
    });
  }, []);

  const signOut = useCallback(() => {
    setUser({} as User);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext<AuthContextProps>(AuthContext);

  if (!context)
    throw new Error('You must include the provider of context hook');

  return context;
}

export { AuthProvider, useAuth };
