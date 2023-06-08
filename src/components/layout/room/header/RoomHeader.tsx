import { Room } from '@/data/models/room.model';

export interface IRoomHeader {
  room: Room;
}

const RoomHeader: React.FC<IRoomHeader> = ({ room }) => {
  return (
    <div>
      <p>{room.name}</p>
    </div>
  );
};

export default RoomHeader;
