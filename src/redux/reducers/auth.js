import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loader: true,
    isAdmin: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    setUser: (state, action) => {
      state.user = action.payload;
      state.loader = false;
      state.isAdmin = action.payload?.role === 'admin';
    },
    clearUser: (state) => {
      state.user = null;
      state.loader = false;
      state.isAdmin = false;
    }
  }
})

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;
// This code defines a Redux slice for authentication state management.