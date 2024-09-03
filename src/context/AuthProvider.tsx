import { checkAccessToken } from '@/apis/authAPIs/authAPIs';
import { useQuery } from '@tanstack/react-query';
import { useContext, createContext, useState } from 'react';

interface AuthCreateContextProps {
  isAuthed: boolean;
}

const AuthContext = createContext<AuthCreateContextProps>({ isAuthed: false });

export function useAuthContext() {
  return useContext(AuthContext);
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const [isAuthed, setIsAuthed] = useState(false);
  const { data, isPending, error } = useQuery({
    queryKey: ['auth'],
    queryFn: () => checkAccessToken(),
    retry: false,
  }); 

  const value = { isAuthed };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
