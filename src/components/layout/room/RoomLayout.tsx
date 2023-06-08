import { useAppDispatch, useAppSelector } from '@/data/hook';
import { Room } from '@/data/models/room.model';
import { getRoom, getRooms, roomSelector } from '@/data/slicer/roomSlicer';
import { useEffect, useState } from 'react';
import styles from './RoomLayout.module.scss';

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
      {room.list &&
        room.list.map((r: Room, i: number) => (
          <div
            onClick={() => selectRoom(r.room_id)}
            className={styles.room}
            key={i}
          >
            <span>{r.name}</span>
          </div>
        ))}
    </div>
  );
};

export default RoomLayout;
