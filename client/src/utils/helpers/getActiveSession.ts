import type { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const getActiveSession = createSelector(
	(state: RootState) => state.user.user,
	(state: RootState) => state.organizer.organizer,
	(user, org) => {
		if (user) return { role: "user" };
		if (org) return { role: "organizer" };
		return null;
	}
);
