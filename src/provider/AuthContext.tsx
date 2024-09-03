'use client';

import { checkAccessToken, refreshAccessToken } from '@/apis/authAPIs/authAPIs';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  isAuthed: boolean;
  isPending: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthed: false,
  isPending: false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const { data, error } = useQuery({
    queryKey: ['auth'],
    queryFn: () => checkAccessToken(),
    retry: false,
  });

  const {
    data: refreshData,
    error: refreshError,
    refetch,
  } = useQuery({
    queryKey: ['refresh'],
    queryFn: () => refreshAccessToken(),
    retry: false,
    enabled: false,
  });

  useEffect(() => {
    const auth = () => {
      setIsPending(true);

      if (data) {
        setIsAuthed(true);
        setIsPending(false);
      }

      if (error) {
        refresh();
      }
    };

    const refresh = async () => {
      await refetch();

      if (refreshData) {
        setIsAuthed(true);
        setIsPending(false);
      } else {
        // redirect
        setIsPending(false);
      }
    };

    auth();
  }, [data, refreshData]);

  const value = { isAuthed, isPending };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
