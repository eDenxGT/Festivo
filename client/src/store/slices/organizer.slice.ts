import type { Organizer } from "@/types/OrganizerTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface OrganizerState {
	organizer: Organizer | null;
}

const initialState: OrganizerState = {
	organizer: null,
};

const organizerSlice = createSlice({
	name: "organizer",
	initialState,
	reducers: {
		organizerLogin: (state, action: PayloadAction<Organizer>) => {
			state.organizer = action.payload;
		},
		organizerLogout: (state) => {
			state.organizer = null;
		},
	},
});

export const { organizerLogin, organizerLogout } = organizerSlice.actions;
export default organizerSlice.reducer;
