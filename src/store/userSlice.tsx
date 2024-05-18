import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../interfaces';

const initialState: UserState = {
    isAuthenticated: false,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
