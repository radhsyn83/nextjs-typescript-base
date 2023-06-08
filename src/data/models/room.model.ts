import { Chat } from './chat.model';

export interface IRoomState {
  loading: boolean;
  list?: Room[];
  selectedRoom?: Room;
  error: string;
}

export interface Room {
  room_id: string;
  username: string;
  name: string;
  photo_url: string;
  status: string;
  room_type: string;
  created_date: string;
  update_date: string;
  unread_count: number;
  participants: Participant[];
  last_chat_id: string;
  last_chat: string;
  last_chat_date: string;
  chats?: Chat[];
}

export interface Participant {
  user_id: string;
  username: string;
  name: string;
  avatar_url: string;
  join_date: string;
  last_chat_id: string;
  last_chat: string;
}
