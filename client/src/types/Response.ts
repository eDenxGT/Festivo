import type { Organizer } from "./OrganizerTypes";
import type { User } from "./UserTypes";

export interface IAxiosResponse {
	success: boolean;
	message: string;
}

export interface IAuthResponse extends IAxiosResponse {
	data: User | Organizer;
}
