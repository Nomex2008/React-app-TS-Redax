import { createSlice, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
            });
    },
})

export default userSlice.reducer;
