import { createContext } from 'react';

import { useUser } from '../hooks/useUser';

const defaultUserContext = {
  loading: true,
  user: {
    name: '',
    token: '',
  },
  setUser: () => {},
};

export const UserContext =
  createContext<ReturnType<typeof useUser>>(defaultUserContext);
