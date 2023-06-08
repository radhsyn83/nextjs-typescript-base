export interface IUser {
  loading: boolean;
  profile?: User;
  error: string;
}

export interface User {
  id?: string;
  app_id?: string;
  username?: string;
  name?: string;
  email?: string;
  phone?: string;
  photo?: string;
  is_admin?: boolean;
  room_id?: string;
  token_jwt?: string;
  token_fcm?: string;
  extra?: Extra;
}

export interface Extra {
  os?: string;
  status_member?: string;
}
