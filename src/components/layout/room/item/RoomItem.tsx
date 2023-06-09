import Avatar from '@/components/image/avatar/Avatar';
import { Room } from '@/data/models/room.model';
import styles from './RoomItem.module.scss';

export interface IRoomItem {
  room: Room;
  isActive: boolean;
  onClick: () => void;
}

const RoomItem: React.FC<IRoomItem> = ({ room, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${isActive && styles.active}`}
    >
      <div className={styles.image}>
        <Avatar url={room.photo_url} alt={room.name} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>
          {room.name === undefined ? `User #${room.username}` : room.name}
        </span>
        <span className={styles.message}>{room.last_chat}</span>
      </div>
    </div>
  );
};

export default RoomItem;
