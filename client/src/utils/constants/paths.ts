export const PATH = {
	LANDING_PAGE: "/",

	ORG: {
		SIGNIN: "/org/signin",
		SIGNUP: "/org/signup",
		DASHBOARD: "/org/dashboard",
		CREATE_EVENT: "/org/create-event",
		EDIT_EVENT: "/org/edit-event",
		MY_EVENTS: "/org/my-events",
	},
	USER: {
		SIGNIN: "/user/signin",
		SIGNUP: "/user/signup",
		HOME: "/user/home",
		EVENTS: "/user/events",
		REGISTERED_EVENTS: "/user/registered-events",
	},
} as const;
