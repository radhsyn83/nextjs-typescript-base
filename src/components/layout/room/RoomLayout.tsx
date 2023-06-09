import Avatar from '@/components/image/avatar/Avatar';
import { useAppDispatch, useAppSelector } from '@/data/hook';
import { Room } from '@/data/models/room.model';
import { getRoom, getRooms, roomSelector } from '@/data/slicer/roomSlicer';
import { useEffect, useState } from 'react';
import styles from './RoomLayout.module.scss';
import RoomItem from './item/RoomItem';

export interface IRoomLayout {}

const RoomLayout: React.FC<IRoomLayout> = () => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(roomSelector);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(room.loading);
    if (!room.list) {
      dispatch(getRooms());
    }
  }, [room]);

  const selectRoom = (idRoom: string) => {
    dispatch(getRoom(idRoom));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.chat_label}>Chat</h2>
      <div className={styles.user}>
        <div className={styles.image}>
          <Avatar size={35} url={''} alt={''} />
        </div>
        <div className={styles.content}>
          <span className={styles.name}>Fathur Radhy</span>
          <span className={styles.profile_lable}>@radhsyn83</span>
        </div>
      </div>
      {room.list &&
        room.list.map((r: Room, i: number) => (
          <RoomItem
            isActive={room.selectedRoom?.room_id === r.room_id}
            onClick={() => selectRoom(r.room_id)}
            room={r}
            key={i}
          />
        ))}
    </div>
  );
};

export default RoomLayout;
