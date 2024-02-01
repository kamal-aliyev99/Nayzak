import { createSlice } from '@reduxjs/toolkit'

export interface UserState{
  userData: object,
}

const initialState: UserState = {
  userData: {},
}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer