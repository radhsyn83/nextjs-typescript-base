import Avatar from '@/components/image/avatar/Avatar';
import { Room } from '@/data/models/room.model';
import styles from './RoomHeader.module.scss';
export interface IRoomHeader {
  room: Room;
}

const RoomHeader: React.FC<IRoomHeader> = ({ room }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Avatar size={45} url={room.photo_url} alt={room.name} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>
          {room.name === undefined ? `User #${room.username}` : room.name}
        </span>
        <span className={styles.profile_lable}>Lihat Profil</span>
      </div>
    </div>
  );
};

export default RoomHeader;
