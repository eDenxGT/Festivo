import { pvtAxiosInstance } from "@/api/private.axios";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";
import type { IEvent } from "@/types/EventTypes";
import type {
	IAxiosResponse,
	IEventsResponse,
	IRegistrationDetailsResponse,
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

export const getAllEventsForUser = async ({ search }: { search: string }) => {
	const res = await pvtAxiosInstance.get("/events", { params: { search } });
	return res.data;
};

export const registerEvent = async (
	event_id: string
): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.post<IAxiosResponse>(
		"/events/registrations",
		{
			event_id,
		}
	);

	return res.data;
};

export const getRegistrationDetails = async (
	registration_id: string
): Promise<IRegistrationDetailsResponse> => {
	const res = await pvtAxiosInstance.get<IRegistrationDetailsResponse>(
		`/events/registrations/${registration_id}`
	);
	return res.data;
};

export const updateRegistrationStatus = async ({
	registration_id,
	type,
	food_field,
}: {
	registration_id: string;
	type: "food_coupon" | "entry_ticket";
	food_field?: "morning" | "noon" | "evening";
}): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.patch(
		`/events/registrations/${registration_id}?type=${type}&food_field=${food_field}`
	);

	return res.data;
};
