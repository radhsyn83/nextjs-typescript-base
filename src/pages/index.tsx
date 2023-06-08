import PrimaryLayout from '@/components/layout/primary/PrimaryLayout';
import RoomLayout from '@/components/layout/room/RoomLayout';
import RoomHeader from '@/components/layout/room/header/RoomHeader';
import { useAppDispatch, useAppSelector } from '@/data/hook';
import { roomSelector } from '@/data/slicer/roomSlicer';
import { getProfile, userSelector } from '@/data/slicer/userSlicer';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();
  const room = useAppSelector(roomSelector);
  const user = useAppSelector(userSelector);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(user.loading);
    if (!user.profile) {
      dispatch(getProfile());
    }
  }, [user]);

  useEffect(() => {
    setLoading(room.loading);
  }, [room]);

  return (
    <div className={styles.container}>
      <br /> {loading && <div>Loading...</div>}
      {room.selectedRoom && !loading && (
        <div>
          <RoomHeader room={room.selectedRoom} />
          <br />
          <p>Chat List: </p>
          {room.selectedRoom.chats?.map((c, i) => (
            <div key={i}>
              <p>
                {c.user_id == user.profile?.id ? 'me' : c.name}: {c.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <RoomLayout />
      {page}
    </PrimaryLayout>
  );
};
