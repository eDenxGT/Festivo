import type { User } from "@/types/UserTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	user: User | null;
}

const initialState: UserState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLogin: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		userLogout: (state) => {
			state.user = null;
		},
	},
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
