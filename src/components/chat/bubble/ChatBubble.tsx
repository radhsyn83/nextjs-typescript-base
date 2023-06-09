import { useAppSelector } from '@/data/hook';
import { Chat } from '@/data/models/chat.model';
import { userSelector } from '@/data/slicer/userSlicer';
import styles from './ChatBubble.module.scss';

export interface IChatBubble {
  chat: Chat;
  isMe: boolean;
  isSystem: boolean;
  isShowTail: boolean;
  isShowDate: boolean;
  isShowSender: boolean;
}

const ChatBubble: React.FC<IChatBubble> = ({
  chat,
  isMe,
  isSystem,
  isShowTail,
  isShowDate,
  isShowSender,
}) => {
  const user = useAppSelector(userSelector);

  return (
    <div className={styles.container}>
      {isShowDate && (
        <div className={styles.date}>
          <span>{chat.date_add}</span>
        </div>
      )}
      <div
        className={styles.bubble}
        style={{ justifyContent: isMe ? 'end' : 'start' }}
      >
        <div
          className={`${styles.chat} ${isMe ? styles.mine : styles.opponent} ${
            isShowTail && (isMe ? styles.tail_mine : styles.tail_opponent)
          }`}
        >
          {chat.message}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
