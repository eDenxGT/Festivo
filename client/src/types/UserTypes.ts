import type { Organizer } from "./OrganizerTypes";

export type UserRole = "user" | "organizer";
export type UserDTO = Partial<User | Organizer>;

export interface User {
	id: string;
	name: string;
	email: string;
	created_at?: Date;
}

export interface ILoginData {
	email: string;
	password: string;
	role: string;
}

export interface IRegisterData {
	email: string;
	name: string;
	password: string;
	is_company?: string;
}
