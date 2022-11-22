export interface IUser {
  id?: string;
  name?: string;
  login: string;
  password: string;
}
export interface userSliceInitState {
  user: IUser;
}
