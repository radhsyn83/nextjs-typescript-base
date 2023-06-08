export interface Extras {
  payload: Chat;
  type: string;
}

export interface Chat {
  id: string;
  name: string;
  user_id: string;
  room_id: string;
  username: string;
  avatar_url: string;
  message: string;
  type: string;
  unique_id: string;
  date_add: string;
  deleted: number;
  status: string;
  room_status: string;
  extras?: Extras;
}
