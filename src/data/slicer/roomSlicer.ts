import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BaseModel } from '../models/default.model';
import { IRoomState, Room } from '../models/room.model';
import { apiService } from '../services';
import { RootState } from '../store';

const initialState: IRoomState = {
  loading: false,
  error: '',
};

export const getRooms = createAsyncThunk('getRooms', async () => {
  const res = await apiService
    .GET('room/list')
    .catch((e) => console.log(e, 'error'));
  return res;
});

export const getRoom = createAsyncThunk('getRoom', async (idRoom: string) => {
  const res = await apiService
    .GET('admin/chat/' + idRoom)
    .catch((e) => console.log(e, 'error'));
  return res;
});

const roomSlice = createSlice({
  name: 'room',
  initialState,
  extraReducers: (builder) => {
    //getRooms
    builder.addCase(getRooms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getRooms.fulfilled,
      (state, action: PayloadAction<BaseModel<Array<Room>>>) => {
        state.loading = false;
        state.list = action.payload.result;
      }
    );
    builder.addCase(getRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
    //getRoom
    builder.addCase(getRoom.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getRoom.fulfilled,
      (state, action: PayloadAction<BaseModel<Room>>) => {
        state.loading = false;
        state.selectedRoom = action.payload.result;
      }
    );
    builder.addCase(getRoom.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
  },
  reducers: {},
});

export const roomSelector = (state: RootState) => state.roomReducer;
export default roomSlice.reducer;
