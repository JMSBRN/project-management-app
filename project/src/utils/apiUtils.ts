import { FormValues } from 'components/form/Form';
import { IUser } from 'features/user/userInterfaces';

const { REACT_APP_API_LOCAL_URL, REACT_APP_TOKEN_SERVER_MONGO, REACT_APP_API_URL_MONGO_RENDER } =
  process.env;
const setUrl = (data: NodeJS.ProcessEnv) => {
  if (data.NODE_ENV === 'development') {
    return REACT_APP_API_LOCAL_URL;
  } else {
    return REACT_APP_API_URL_MONGO_RENDER;
  }
};
const url = setUrl(process.env);
const urlUsers = `${url}/users`;
const urlSignIn = `${url}/auth/signin`;
const urlSignUp = `${url}/auth/signup`;
const token = `Bearer ${REACT_APP_TOKEN_SERVER_MONGO}`;
export const getUsers = async (token: string) => {
  try {
    const res = await fetch(urlUsers, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const { status } = data;
    if (status !== 200) {
      return;
    }
    return data;
  } catch (e) {
    console.error('error from getUser', e);
    return;
  }
};
export const getUserById = async (id: string, token: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('error from getUser', e);
    return;
  }
};
export const signUp = async (user: IUser) => {
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
    const { statusCode } = data;
    if (statusCode === 409) {
      return data;
    } else if (statusCode === 404) {
      return;
    }
    return data;
  } catch (e) {
    console.error('error from createUser', e);
    return;
  }
};
export const signIn = async (user: IUser) => {
  const { login, password } = user;
  try {
    const res = await fetch(urlSignIn, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });
    const data = await res.json();
    const { statusCode } = data;
    if (statusCode) {
      return data;
    }
    return data;
  } catch (e) {
    console.error('error from signIn', e);
  }
};
export const deleteUser = async (id: string, token: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
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
export const getUserName = async (id: string, token: string) => {
  let name = '';
  await getUserById(id, token).then((user) => {
    name = user.name;
  });
  return name;
};
export const getTimeFromToken = async (token: string) => {
  return getParsedJwt(token)?.iat as number;
};
export const setTimeFromToken = async (data: FormValues) => {
  const time = await signIn(data).then(async ({ token }) => {
    return await getTimeFromToken(token);
  });
  return time;
};
export const isOnline = () => {
  return window.navigator.onLine;
};
