import { getEventById } from "@/services/event.service";
import type { ISingleEventResponse } from "@/types/Response";
import { useQuery } from "@tanstack/react-query";
export const useGetEventByIdQuery = (event_id: string) => {
	return useQuery<ISingleEventResponse, Error>({
		queryKey: ["event-by-id", event_id],
		queryFn: () => getEventById(event_id),
	});
};
