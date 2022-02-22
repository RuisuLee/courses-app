import { clearUserToken, IUser, putUserToken } from '../../helpers/userData';
import { login, logout, UserActions } from './userActions';

export type UserState = IUser | null;

export function userReducer(
  state: UserState = null,
  action: UserActions
): UserState {
  switch (action.type) {
    case login.type:
      putUserToken(action.payload);
      return {
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case logout.type:
      clearUserToken();
      return null;
    default:
      return state;
  }
}
