import { pvtAxiosInstance } from "@/api/private.axios";
import type { EventFormValues } from "@/hooks/events/forms/useCreateEventForm";
import type { IAxiosResponse } from "@/types/Response";

export const createEvent = async (
	data: EventFormValues
): Promise<IAxiosResponse> => {
	const res = await pvtAxiosInstance.post<IAxiosResponse>("/events", data);
	return res.data;
};
