import { useMutation } from "@tanstack/react-query";
import type { EventFormValues } from "../forms/useCreateEventForm";
import { createEvent } from "@/services/event.service";
import type { IAxiosResponse } from "@/types/Response";

export const useCreateEventMutation = () =>
	useMutation<IAxiosResponse, Error, EventFormValues>({
		mutationFn: (values: EventFormValues) => createEvent(values),
	});
