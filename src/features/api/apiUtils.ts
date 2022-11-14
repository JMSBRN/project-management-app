import { Api } from "./apiConstants";
const url = Api.API_URL;
const urlUsers = `${url}/users`;
const urlCreateUser = `${url}/signup`;

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
    console.error("error from getUser", e);
    return;
  }
};
export interface IUser {
  name?: string;
  login: string;
  password: string;
}
export const getUserById = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${Api.TOKEN}`,
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      console.log(data.message);
    }
    return data;
  } catch (e) {
    console.error("error from getUser", e);
    return;
  }
};
export const createUser = async (user: IUser) => {
  try {
    const res = await fetch(urlCreateUser, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.status !== 200) {
      console.log(data.message);
      return;
    }
    return data;
  } catch (e) {
    console.error("error from createUser", e);
    return;
  }
};
export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(`${urlUsers}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${Api.TOKEN}`,
      },
    });
  } catch (e) {
    console.error("error from deleteUser", e);
  }
};
