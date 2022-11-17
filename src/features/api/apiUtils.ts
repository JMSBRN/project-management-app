import { Api } from './apiConstants';
const url = Api.API_URL;
const urlUsers = `${url}/users`;
const urlSignIn = `${url}/signin`;
const urlSignUp = `${url}/signup`;

export const getUsers = async () => {
  try {
    const res = await fetch(urlUsers, {
      headers: {
        Authorization: `Bearer ${Api.TOKEN}`,
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      return;
    }
    return data;
  } catch (e) {
    console.error('error from getUser', e);
    return;
  }
};
export interface IUser {
  id?: string;
  name?: string;
  login: string;
  password: string;
}
export const getUserById = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Api.TOKEN}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('error from getUser', e);
    return;
  }
};
export const apiSignUp = async (user: IUser) => {
  try {
    const res = await fetch(urlSignUp, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.statusCode === 409) {
      return data.message;
    } else if (data.statusCode === 404) {
      return;
    }
    return data;
  } catch (e) {
    console.error('error from createUser', e);
    return;
  }
};
export const apiSignIn = async (user: IUser) => {
  try {
    const res = await fetch(urlSignIn, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data.statusCode === 403) {
      return data;
    }
    return data;
  } catch (e) {
    console.error('error from signIn', e);
  }
};
export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${Api.TOKEN}`,
      },
    });
    return res.statusText;
  } catch (e) {
    console.error('error from deleteUser', e);
  }
};
export const getParsedJwt = <T extends object = { [k: string]: string | number }>(
  token: string
): T | undefined => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return undefined;
  }
};

export const getLoggedUserByIdName = async (id: string) => {
  const user = getUserById(id);
  const userName = await user;
  const name = await userName.name;
  return name;
};
