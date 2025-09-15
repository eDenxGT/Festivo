import { pvtAxiosInstance } from "@/api/private.axios";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";
import type { IEvent } from "@/types/EventTypes";
import type {
	IAxiosResponse,
	IEventsResponse,
	ISingleEventResponse,
} from "@/types/Response";

export const createEvent = async (
	data: EventFormValues
): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.post<IAxiosResponse>("/events", data);
	return res.data;
};

export const getEventsForOrganizer = async (): Promise<IEventsResponse> => {
	const res = await pvtAxiosInstance.get<IEventsResponse>("/org/events");

	return res.data;
};

export const getEventById = async (
	event_id: string
): Promise<ISingleEventResponse> => {
	const res = await pvtAxiosInstance.get<ISingleEventResponse>(
		`/events/${event_id}`
	);
	return res.data;
};

export const editEvent = async (
	data: Partial<IEvent>
): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.put("/org/events", data);
	return res.data;
};
