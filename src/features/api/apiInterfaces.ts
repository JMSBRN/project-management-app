export interface IUserSignUpData {
  id: string;
  name: string;
  login: string;
}
export interface apiSliceIinitState {
  authorised: boolean;
  token: string;
  userSignUpData: IUserSignUpData;
  errorApiMessage: string;
  userName: string;
  loggedUserId: string;
  deleteStatusMessage: string;
  loading: boolean;
  boards: boolean;
}
