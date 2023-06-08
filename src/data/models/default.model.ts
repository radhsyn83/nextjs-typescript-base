export type BaseModel<T> = {
  code: number;
  msg: MessageModel;
  result?: T;
};

export type MessageModel = {
  id?: string;
  en?: string;
};
