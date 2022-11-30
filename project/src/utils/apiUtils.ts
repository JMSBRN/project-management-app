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
export const getUsers = async () => {
  try {
    const res = await fetch(urlUsers, {
      headers: {
        Authorization: token,
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
export const getUserById = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: token,
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
  const userWithoutName = {
    login: login,
    password: password,
  };
  try {
    const res = await fetch(urlSignIn, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userWithoutName),
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
export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: '*/*',
        Authorization: token,
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
export const getUserName = async (id: string) => {
  let name = '';
  await getUserById(id).then((user) => {
    name = user.name;
  });
  return name;
};
export const getTimeFromToken = async (token: string) => {
  const parsedJwt = getParsedJwt(token);
  const timeFromToken = parsedJwt?.iat as number;
  return timeFromToken;
};
export const setTimeFromToken = async (data: FormValues) => {
  let time = 0;
  await signIn(data).then(async (data) => {
    time = await getTimeFromToken(data.token);
  });
  return time;
};
export const isOnline = () => {
  return window.navigator.onLine;
};
