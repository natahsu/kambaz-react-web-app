import { createSlice } from "@reduxjs/toolkit";
import usersData from "../Database/users.json";

const initialState = {
    currentUser: null,
    users: usersData
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
