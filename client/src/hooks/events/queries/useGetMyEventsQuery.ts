import { getEventsForOrganizer } from "@/services/event.service";
import type { IEventsResponse } from "@/types/Response";
import { useQuery } from "@tanstack/react-query";

export const useGetEventsQuery = () => {
	return useQuery<IEventsResponse>({
		queryKey: ["my-events"],
		queryFn: getEventsForOrganizer,
	});
};
