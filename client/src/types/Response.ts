import type { IEvent } from "./EventTypes";
import type { Organizer } from "./OrganizerTypes";
import type { IRegistrationWithEvent } from "./RegistrationTypes";
import type { User } from "./UserTypes";

export interface IAxiosResponse {
	success: boolean;
	message: string;
}

export interface IAuthResponse extends IAxiosResponse {
	data: User | Organizer;
}

export interface ISingleEventResponse extends IAxiosResponse {
	data: IEvent;
}
export interface IEventsResponse extends IAxiosResponse {
	data: IEvent[];
}

export interface IRegistrationDetailsResponse extends IAxiosResponse {
	data: IRegistrationWithEvent;
}
