export interface IAuthState {
  loading: boolean;
  user?: User;
  error: string;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
