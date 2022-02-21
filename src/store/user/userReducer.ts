import { IUser } from '../../helpers/userData';
import { login, logout, UserActions } from './userActions';

export function userReducer(state: IUser, action: UserActions): IUser {
  switch (action.type) {
    case login.type:
      return {
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case logout.type:
      return {
        isAuth: false,
        name: '',
        email: '',
        token: '',
      };
    default:
      return state;
  }
}
