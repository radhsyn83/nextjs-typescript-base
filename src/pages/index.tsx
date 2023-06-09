import ChatBubble from '@/components/chat/bubble/ChatBubble';
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
      {loading && (
        <div className={styles.loading}>
          <div className="spinner" />
        </div>
      )}
      {room.selectedRoom && (
        <>
          <RoomHeader room={room.selectedRoom} />
          <div className={styles.conversation}>
            {room.selectedRoom.chats?.map((c, i) => {
              const chats = room?.selectedRoom?.chats ?? [];
              const chatLength = chats.length ?? 0;
              //system
              const isSystem = c.type == 'system';
              if (isSystem) {
                console.log(c.user_id);
                c.user_id = 'system';
              }
              //date
              const date = c.date_add.substring(0, 10);
              //check date same with before
              const isDateSameWithBefore =
                i == chatLength - 1 ||
                (i > 0 &&
                  i != chatLength - 1 &&
                  date != chats[i + 1].date_add.toString().substring(0, 10));
              //check show date
              const isShowDate =
                i == 0 ||
                (i > 0 &&
                  date != chats[i - 1].date_add.toString().substring(0, 10));
              //check show sender name
              const isShowSender =
                (i != chatLength - 1 && c.user_id != chats[i + 1].user_id) ||
                isShowDate;
              //check show bubble tail
              const isShowTail =
                i == chatLength - 1 ||
                (i != chatLength - 1 && c.type != chats[i + 1].type) ||
                (i != chatLength - 1 && c.user_id != chats[i + 1].user_id) ||
                isDateSameWithBefore;
              //check is chat send by me
              const isMe = c.user_id!.toString() == user.profile?.id;

              return (
                <>
                  <ChatBubble
                    isMe={isMe}
                    isShowDate={isShowDate}
                    isShowSender={isShowSender}
                    isShowTail={isShowTail}
                    isSystem={isSystem}
                    key={i}
                    chat={c}
                  />
                </>
              );
            })}
          </div>
        </>
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
