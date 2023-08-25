import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
  recentSearches:[]
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRecentSearches: (state, action) => {
      state.recentSearches = action.payload;
    },
  },
});

export const {setUser,setRecentSearches} = userReducer.actions;

export default userReducer.reducer;
