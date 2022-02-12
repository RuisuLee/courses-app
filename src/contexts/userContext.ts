import { createContext } from 'react';

import { IUser } from '../helpers/userData';

export const UserContext = createContext<IUser | undefined>(undefined);
