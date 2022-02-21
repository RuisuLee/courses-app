import { createActionFactory } from '..';
import { IUser } from '../../helpers/userData';

export const login = createActionFactory('login')<IUser>();
export const logout = createActionFactory('logout')();

export type UserActions = ReturnType<typeof login> | ReturnType<typeof logout>;
