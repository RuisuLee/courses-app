export interface IUser {
  name: string;
  token: string;
}

export function getUserData(): IUser | undefined {
  const name = localStorage.getItem('userName');
  const token = localStorage.getItem('userToken');
  if (name && token) return { name, token };
  return undefined;
}

export function putUserData(user: IUser) {
  localStorage.setItem('userName', user.name);
  localStorage.setItem('userToken', user.token);
}

export function clearUserData() {
  localStorage.removeItem('userName');
  localStorage.removeItem('userToken');
}
